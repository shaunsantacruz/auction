import server from './src/server'
import createSocketServer from './src/socket-server'
import handleSocketEvents from './src/socket-events'
import configureStore from './src/configureStore'

const store = configureStore()
const {socketServer} = createSocketServer(server)

handleSocketEvents(socketServer, store)
