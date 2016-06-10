import {createStore, applyMiddleware} from 'redux'

//import * as main from './main'
//import remoteAction from './middleware/remoteAction'


import { combineReducers } from 'redux'
import * as bidItem from '../../common/bidItem'

export const reducer = combineReducers({
  [bidItem.name]: bidItem.reducer
})

const configureStore = () => {

  //const createStoreWithMiddleware = applyMiddleware(
  //  remoteAction()
  //)(createStore)

  const store = createStore(reducer)

  return store
}

export default configureStore
