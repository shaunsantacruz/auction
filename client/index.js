/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "flexboxgrid" }]*/
import { Router, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {flexboxgrid} from 'flexboxgrid'
import SocketProvider from '../common/socket/SocketProvider'

import routes from './../common/routes'
import configureStore from './../common/configureStore'

import {getNamespace, socket} from './socket-client'
const namespace = getNamespace(location.pathname)

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, namespace)

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider socket={socket} namespace={namespace}>
      <Router history={browserHistory} routes={routes}/>
    </SocketProvider>
  </Provider>,
  document.getElementById('app')
)
