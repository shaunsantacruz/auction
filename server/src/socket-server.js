import io from 'socket.io'

import configureStore from './configureStore'
import * as bidItem from '../../common/bidItem'
//import {createStore, applyMiddleware} from 'redux'

const store = configureStore()

export default function (server) {
  const socketServer = io(server)

  store.subscribe(
    () => socketServer.emit('state', store.getState())
  )

  socketServer.on('connection', (socket) => {
    socket.on('action', (action) => {
      // dispatch here
      store.dispatch(action)
    })
  })

  return io
}
