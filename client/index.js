/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "flexboxgrid" }]*/
import { Router, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {flexboxgrid} from 'flexboxgrid'

import routes from './../common/routes'
import configureStore from './../common/configureStore'

import {handleSocketEvents} from './../common/main'
import {getNamespace, socket} from './src/socket-client'

const initialState = window.__INITIAL_STATE__;
const namespace = getNamespace(location.pathname);

const store = configureStore(initialState, namespace)

handleSocketEvents(socket, namespace, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)
