import watch from 'redux-watch'
import * as bidItem from '../../common/bidItem'

export default function handleSocketEvents(socketServer, store) {
  let watchBidItem = watch(() => bidItem.selectors.getModel(store.getState()))

  store.subscribe(
    watchBidItem((newVal, oldVal, objectPath) => {
      console.log('%s changed', objectPath)
      console.log('old', oldVal)
      console.log('new', newVal)
      if(oldVal === newVal) {
        return;
      }
      socketServer.of('/bidder').emit('state', bidItem.selectors.getModel(store.getState()))
    })
  )

  socketServer.of('/bidder').on('connection', (socket) => {
    console.log( 'User ' + socket.id + ' connected' );
  })

  socketServer.on('connection', (socket) => {
    console.log( 'User ' + socket.id + ' connected' );
    // listen on action from client
    socket.on('action', (action) => {
      // dispatch action
      store.dispatch(action)
    })
  })
}
