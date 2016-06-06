'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleSocketEvents;

var _reduxWatch = require('redux-watch');

var _reduxWatch2 = _interopRequireDefault(_reduxWatch);

var _bidItem = require('../../common/bidItem');

var bidItem = _interopRequireWildcard(_bidItem);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleSocketEvents(socketServer, store) {
  var watchBidItem = (0, _reduxWatch2.default)(function () {
    return bidItem.selectors.getModel(store.getState());
  });

  store.subscribe(watchBidItem(function (newVal, oldVal, objectPath) {
    console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
    console.log('old', oldVal);
    console.log('new', newVal);
  }));

  socketServer.on('connection', function (socket) {
    console.log('User ' + socket.id + ' connected');
    socket.emit('state', bidItem.selectors.getModel(store.getState()));
    socket.on('action', function (action) {
      // dispatch here
      store.dispatch(action);
    });
  });
}