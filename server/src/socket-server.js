import io from 'socket.io'

//import {createStore, applyMiddleware} from 'redux'

export default function (server) {
  const socketServer = io(server)
  return socketServer
}
