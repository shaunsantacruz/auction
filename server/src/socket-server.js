import io from 'socket.io'

export default function (server) {
  const socketServer = io(server)

  socketServer.on('connection', (socket) => {
    socket.emit('foo', 'foo')
    console.log('foo', process.env.NODE_ENV)
  })

  return io
}
