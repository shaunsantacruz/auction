/* eslint-disable no-unused-vars */

export default socket => store => next => action => {
  console.log('socket');
  if(action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}
