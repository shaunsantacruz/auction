import watch from 'redux-watch'
import * as bidItem from '../../common/bidItem'
import * as bidBoard from '../../common/bidBoard'
import * as usersById from '../../common/usersById'
import * as loggedInUserIds from '../../common/loggedInUserIds'

export default function handleSocketEvents(socketServer, store) {
  const { dispatch } = store

  let watchBidItem = watch(() => bidItem.selectors.getModel(store.getState()))
  store.subscribe(
    watchBidItem((newVal, oldVal, objectPath) => {
      console.log('%s changed', objectPath)
      console.log('old', oldVal)
      console.log('new', newVal)
      if (oldVal === newVal) {
        return
      }
      socketServer.of('/bidder').emit('bid_state', bidItem.selectors.getModel(store.getState()))
    })
  )

  socketServer.of('/bidder').on('connection', (socket) => {
    console.log('User ' + socket.id + ' connected');

    socket.on('action', (action) => {
      const { type } = action
      switch (type) {
        case bidItem.actions.BID_ATTEMPT:
        {
          //dispatch(bidBoard.actions.SET_RECENT_BIDDER())
          //dispatch(bidBoard.actions.SET_PRICE())
        }
      }
      // dispatch action
      //store.dispatch(action)
    })
  })

  socketServer.on('connection', (socket) => {
    socket.on('join', (user) => {
      const {id, fullName} = user
      dispatch(loggedInUserIds.actions.addId(id))
      dispatch(usersById.actions.addUser(user))
      //console.log(usersById.selectors.getUser(store.getState(), id));
      socket.join(id)
      //io.to(userId).emit('joined', 'joined')
      socketServer.to(id).emit('joined', `Hello ${fullName}`)
    })

    socket.on('user disconnect', (user) => {
      console.log('disconnect', user);
    })
  })

}

