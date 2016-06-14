import io from 'socket.io-client'

const bidderNs = 'bidder'
const broadcasterNs = 'broadcaster'

const port = 8090
const config = {
  'sync disconnect on unload': true,
  'transports': ['websocket'],
  //'multiplex'                 : false,
}

//const socket = io(`${location.protocol}//${location.hostname}:${port}`, config)

function getNamespace(pathname) {
  return /\/bidder/.test(pathname)
    ? io(`${location.protocol}//${location.hostname}:${port}/${bidderNs}`, config)
    : io(`${location.protocol}//${location.hostname}:${port}/${broadcasterNs}`, config)
}

export {
  getNamespace
}
