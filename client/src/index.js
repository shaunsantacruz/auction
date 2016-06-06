import { Router, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import routes from './routes'
import configureStore from './configureStore'
import {handleSocketEvents} from './main'
import {getNamespace, socket} from './socket-client'

const store = configureStore(socket)

handleSocketEvents(socket, getNamespace(location.pathname), store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)
