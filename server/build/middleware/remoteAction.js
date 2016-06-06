'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-unused-vars */

exports.default = function (socket) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (action.meta && action.meta.remote) {
          socket.emit('action', action);
        }
        return next(action);
      };
    };
  };
};