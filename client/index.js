import { Router, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import SocketProvider from '../common/socket/SocketProvider'

// css
require('normalize.css')
require('flexboxgrid')
require('./styles/base.scss')

import routes from './../common/routes'
import configureStore from './../common/configureStore'

import {getNamespace} from './socket-client'
const namespace = getNamespace(location.pathname)

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, namespace)

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider namespace={namespace}>
      <Router history={browserHistory} routes={routes}/>
    </SocketProvider>
  </Provider>,
  document.getElementById('app')
)
