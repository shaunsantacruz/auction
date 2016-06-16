import watch from 'redux-watch'
import * as bidItem from '../../common/bidItem'
//import * as bidBoard from '../../common/bidBoard'
import * as usersById from '../../common/usersById'
import * as loggedInUserIds from '../../common/loggedInUserIds'
import diff from 'deep-diff'


export default function handleSocketEvents(socketServer, store) {
  const { dispatch } = store
  const connectedSocketsById = {}
  const DEV_MODE = process.env.NODE_ENV !== 'production'

  let watchBidItem = watch(() => bidItem.selectors.getModel(store.getState()))
  store.subscribe(
    watchBidItem((newVal, oldVal, objectPath) => {
      if (oldVal === newVal) {
        return
      }
      //console.log('%s changed', objectPath)
      //console.log('old', oldVal)
      //console.log('new', newVal)
      //console.log('diff', differences)

      const differences = diff(oldVal, newVal)
      // If only difference is price, emit a price change to all connected bidders,
      // otherwise emit the entire object to them
      if(differences[0].path.length === 1 && differences[0].path[0] === 'price') {
        socketServer
          .of('/bidder')
          .emit(
            bidItem.actions.SET_PRICE,
            bidItem.selectors.getPrice(store.getState())
          )
      }else {
        socketServer
          .of('/bidder')
          .emit(
            bidItem.actions.SET_STATE,
            bidItem.selectors.getModel(store.getState())
          )
      }
    })
  )

  socketServer.of('/bidder').on('connection', (socket) => {
    if(DEV_MODE) {
      console.log('User ' + socket.id + ' connected')
      console.log('connection users', loggedInUserIds.selectors.getModel(store.getState()))
    }

    socket.on('disconnect', () => {
      dispatch(loggedInUserIds.actions.removeId(connectedSocketsById[socket.id]))
      if(DEV_MODE) {
        console.log('disconnect users', loggedInUserIds.selectors.getModel(store.getState()))
      }
    })

    socket.on('join', joinUser)
  })

  socketServer.of('/broadcaster').on('connection', (socket) => {
    if(DEV_MODE) {
      console.log('User ' + socket.id + ' connected')
      console.log('connection users', loggedInUserIds.selectors.getModel(store.getState()))
    }

    socket.on('disconnect', () => {
      dispatch(loggedInUserIds.actions.removeId(connectedSocketsById[socket.id]))
      if(DEV_MODE) {
        console.log('disconnect users', loggedInUserIds.selectors.getModel(store.getState()))
      }
    })

    socket.on('join', joinUser)

    socket.on('action', (action) => {
      const { type } = action
      switch (type) {
        case bidItem.actions.BID_ATTEMPT: {
          //dispatch(bidBoard.actions.SET_RECENT_BIDDER())
          //dispatch(bidBoard.actions.SET_PRICE())
          return
        }
        case bidItem.actions.SET_PRICE: {
          console.log('action')
          const {payload: {price}} = action
          dispatch(bidItem.actions.setPrice(price))
          return
        }
        default: null
      }
      // dispatch action
      //store.dispatch(action)
    })

  })

  const joinUser = (user) => {
    // map socket id to user id
    connectedSocketsById[this.id] = user.id
    const {id, fullName} = user
    dispatch(loggedInUserIds.actions.addId(id))
    dispatch(usersById.actions.addUser(user))
    this.join(id)
    //io.to(userId).emit('joined', 'joined')
    socketServer.of('/bidder').to(id).emit('joined', `Hello ${fullName}`)
    //socketServer.to(id).emit('joined', `Hello ${fullName}`)
    if(DEV_MODE) {
      console.log('join users', loggedInUserIds.selectors.getModel(store.getState()))
    }
  }

}

