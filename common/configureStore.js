import {createStore, applyMiddleware} from 'redux'

import * as main from './main'

import remoteAction from './middleware/remoteAction'

const configureStore = (initialState, socket) => {

  let middlewares = []
  const DEV_MODE = process.env.NODE_ENV === 'development'
  const useDevTools = DEV_MODE && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined';

  if(socket) {
    middlewares = [remoteAction(socket)]
  }

  const createStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(createStore)

  const store = createStoreWithMiddleware(
    main.reducer,
    initialState,
    // Redux DevTools chrome extension
    useDevTools ? window.devToolsExtension() : f => f
  )

  if (DEV_MODE && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./main', () => {
      const nextRootReducer = require('./main').reducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}

export default configureStore
