'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _redux = require('redux');

var _bidItem = require('../../common/bidItem');

var bidItem = _interopRequireWildcard(_bidItem);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import * as main from './main'
//import remoteAction from './middleware/remoteAction'

var reducer = exports.reducer = (0, _redux.combineReducers)(_defineProperty({}, bidItem.name, bidItem.reducer));

var configureStore = function configureStore() {

  //const createStoreWithMiddleware = applyMiddleware(
  //  remoteAction()
  //)(createStore)

  var store = (0, _redux.createStore)(reducer);

  return store;
};

exports.default = configureStore;