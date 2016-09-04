import { Router, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import SocketProvider from '../common/socket/SocketProvider'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
      <MuiThemeProvider>
        <Router history={browserHistory} routes={routes}/>
      </MuiThemeProvider>
    </SocketProvider>
  </Provider>,
  document.getElementById('app')
)
