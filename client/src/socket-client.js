import io from 'socket.io-client'

const bidderNs = 'bidder'
const broadcasterNs = 'broadcaster'

const port = 8090

const socket = io(`${location.protocol}//${location.hostname}:${port}`)

function getNamespace(pathname) {
  return /\/bidder/.test(pathname)
    ? io(`${location.protocol}//${location.hostname}:${port}/${bidderNs}`)
    : io(`${location.protocol}//${location.hostname}:${port}/${broadcasterNs}`)
}

export {
  socket,
  getNamespace
}
