import io from 'socket.io-client'
import { Router, browserHistory } from 'react-router'

import React from 'react'
import ReactDOM from 'react-dom'

import routes from './routes'

import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import remoteAction from './middleware/remoteAction'

import * as main from './main'

const port = 8090
const socket = io(`${location.protocol}//${location.hostname}:${port}`)

const createStoreWithMiddleware = applyMiddleware(
  remoteAction(socket)
)(createStore)

const store = createStoreWithMiddleware(main.reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)

socket.on('foo', () => {
  console.log('Socket Connected')
})
