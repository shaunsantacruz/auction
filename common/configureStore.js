import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {compose} from 'ramda'

import * as main from './main'

import remoteAction from './middleware/remoteAction'

const configureStore = (initialState, socket) => {

  let middlewares = []
  const DEV_MODE = process.env.NODE_ENV !== 'production'
  const useDevTools = DEV_MODE && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'

  if(socket) {
    middlewares.push(remoteAction(socket))
  }

  middlewares.push(thunk)

  const store = createStore(
    main.reducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      useDevTools ? window.devToolsExtension() : f => f
    )
  )

  if (DEV_MODE && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./main', () => {
      const nextRootReducer = require('./main').reducer
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
