'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (server) {
  var socketServer = (0, _socket2.default)(server);
  return { io: _socket2.default, socketServer: socketServer };
};

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }