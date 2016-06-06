import { Router, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import routes from './routes'
import configureStore from './configureStore'
import {handleSocketEvents} from './main'
import {getNamespace, socket} from './socket-client'

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
