import io from 'socket.io-client'

const port = 8090
const socket = io(`${location.protocol}//${location.hostname}:${port}`)

socket.on('state', (state) => console.log(`received on client ${state}`))

export default socket
