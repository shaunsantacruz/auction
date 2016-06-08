import {createStore, applyMiddleware} from 'redux'

import * as main from './main'

import remoteAction from './middleware/remoteAction'

const configureStore = (initialState, socket) => {

  let middlewares = []

  if(socket) {
    middlewares = [remoteAction(socket)]
  }

  const createStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(createStore)

  const store = createStoreWithMiddleware(
    main.reducer,
    initialState,
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f)

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./main', () => {
      const nextRootReducer = require('./main').reducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}

export default configureStore
