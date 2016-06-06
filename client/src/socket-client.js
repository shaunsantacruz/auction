import io from 'socket.io-client'

const bidderNs = 'bidder'
const broadcasterNs = 'broadcaster'

const port = 8090

//if(/\/bidder/.test(location.pathname)) {
//  const bidder = io(`${location.protocol}//${location.hostname}:${port}/${bidderNs}`)
//}else {
//  const broadcaster = io(`${location.protocol}//${location.hostname}:${port}/${broadcasterNs}`)
//}

const socket = io(`${location.protocol}//${location.hostname}:${port}`)

//const namespace = getNamespace(location.pathname)

function getNamespace(pathname) {
  return /\/bidder/.test(pathname)
    ? io(`${location.protocol}//${location.hostname}:${port}/${bidderNs}`)
    : io(`${location.protocol}//${location.hostname}:${port}/${broadcasterNs}`)
}

//export default namespace

export {
  socket,
  getNamespace
}
