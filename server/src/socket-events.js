import watch from 'redux-watch'
import * as bidItem from '../../common/bidItem'
//import * as bidBoard from '../../common/bidBoard'
import * as usersById from '../../common/usersById'
import * as loggedInUserIds from '../../common/loggedInUserIds'

export default function handleSocketEvents(socketServer, store) {
  const { dispatch } = store
  const connectedSocketsById = {}
  const DEV_MODE = process.env.NODE_ENV !== 'production'

  let watchBidItem = watch(() => bidItem.selectors.getModel(store.getState()))
  store.subscribe(
    watchBidItem((newVal, oldVal, objectPath) => {
      //console.log('%s changed', objectPath)
      //console.log('old', oldVal)
      //console.log('new', newVal)
      if (oldVal === newVal) {
        return
      }
      socketServer.of('/bidder').emit('bid_state', bidItem.selectors.getModel(store.getState()))
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

    socket.on('join', (user) => {
      // map socket id to user id
      connectedSocketsById[socket.id] = user.id
      const {id, fullName} = user
      dispatch(loggedInUserIds.actions.addId(id))
      dispatch(usersById.actions.addUser(user))
      socket.join(id)
      //io.to(userId).emit('joined', 'joined')
      socketServer.of('/bidder').to(id).emit('joined', `Hello ${fullName}`)
      //socketServer.to(id).emit('joined', `Hello ${fullName}`)
      if(DEV_MODE) {
        console.log('join users', loggedInUserIds.selectors.getModel(store.getState()))
      }
    })

    socket.on('action', (action) => {
      const { type } = action
      switch (type) {
        case bidItem.actions.BID_ATTEMPT: {
          //dispatch(bidBoard.actions.SET_RECENT_BIDDER())
          //dispatch(bidBoard.actions.SET_PRICE())
        }
      }
      // dispatch action
      //store.dispatch(action)
    })
  })

}

