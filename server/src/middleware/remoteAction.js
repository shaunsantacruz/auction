/* eslint-disable no-unused-vars */

export default socket => store => next => action => {
  if(socket && action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}
