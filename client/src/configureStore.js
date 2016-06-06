import {createStore, applyMiddleware} from 'redux'

import * as main from './main'

import remoteAction from './middleware/remoteAction'

const configureStore = (socket) => {

  const createStoreWithMiddleware = applyMiddleware(
    remoteAction(socket)
  )(createStore)

  const store = createStoreWithMiddleware(main.reducer)

  return store
}

export default configureStore
