import {createStore, applyMiddleware} from 'redux'

import * as main from './main'
import remoteAction from './middleware/remoteAction'
import socket from './socket-client'

const configureStore = () => {

  const createStoreWithMiddleware = applyMiddleware(
    remoteAction(socket)
  )(createStore)

  const store = createStoreWithMiddleware(main.reducer)

  return store
}

export default configureStore
