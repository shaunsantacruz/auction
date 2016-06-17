import watch from 'redux-watch'
import * as bidItem from '../../common/bidItem'
import * as bidBoard from '../../common/bidBoard'
import * as usersById from '../../common/usersById'
import * as loggedInUserIds from '../../common/loggedInUserIds'
import diff from 'deep-diff'
import isEqual from 'is-equal'


export default function handleSocketEvents(socketServer, store) {
  const { dispatch } = store
  const connectedSocketsById = {}
  const DEV_MODE = process.env.NODE_ENV !== 'production'

  const watchBidItem = watch(store.getState, bidItem.name, isEqual)
  store.subscribe(
    watchBidItem((newVal, oldVal) => {
      // If only difference is price, emit a price change to all connected bidders,
      // otherwise emit the entire object to them
      const differences = diff(oldVal, newVal)
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
      //console.log('old', oldVal)
      //console.log('new', newVal)
      //console.log('diff', diff(oldVal, newVal))
    })
  )

  const watchBidBoard = watch(store.getState, bidBoard.name, isEqual)
  store.subscribe(
    watchBidBoard(() => {
      socketServer
        .of('/broadcaster')
        .emit(
          bidBoard.actions.SET_STATE,
          bidBoard.selectors.getModel(store.getState())
        )
    })
  )

  socketServer.of('/bidder').on('connection', (socket) => {
    if(DEV_MODE) {
      console.log('User ' + socket.id + ' connected')
      console.log('connection users', loggedInUserIds.selectors.getModel(store.getState()))
    }

    socket.on('action', (action) => {
      if(DEV_MODE) {
        console.log('bidder action received on server', action)
      }
      const { type } = action
      switch (type) {
        case bidItem.actions.BID_ATTEMPT: {
          const {user: {fullName}, price} = action.payload
          const recentBidder = {
            fullName
          }
          dispatch(bidBoard.actions.setRecentBidder(recentBidder))
          dispatch(bidBoard.actions.setPrice(price))
          return
        }
        default: null
      }
    })

    socket.on('disconnect', disconnect)
    socket.on('join', joinUser)
  })

  socketServer.of('/broadcaster').on('connection', (socket) => {

    socket.on('action', (action) => {
      if(DEV_MODE) {
        console.log('broadcaster action received on server', action)
      }
      const { type } = action
      switch (type) {
        case bidItem.actions.SET_PRICE: {
          const {payload: {price}} = action
          dispatch(bidItem.actions.setPrice(price))
          return
        }
        default: null
      }
    })

    if(DEV_MODE) {
      console.log('User ' + socket.id + ' connected')
      console.log('connection users', loggedInUserIds.selectors.getModel(store.getState()))
    }
    socket.on('disconnect', disconnect)
    socket.on('join', joinUser)
  })

  function joinUser(user) {
    // map socket id to user id
    connectedSocketsById[this.id] = user.id
    const {id, fullName} = user
    dispatch(loggedInUserIds.actions.addId(id))
    dispatch(usersById.actions.addUser(user))
    this.join(id)
    if(DEV_MODE) {
      socketServer.of('/bidder').to(id).emit('joined', `Hello ${fullName}`)
      console.log('join users', loggedInUserIds.selectors.getModel(store.getState()))
    }
  }

  function disconnect() {
    dispatch(loggedInUserIds.actions.removeId(connectedSocketsById[this.id]))
    if(DEV_MODE) {
      console.log('disconnect users', loggedInUserIds.selectors.getModel(store.getState()))
    }
  }
}

