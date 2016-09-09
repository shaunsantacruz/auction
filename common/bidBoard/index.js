import * as actions from './actions'
import reducer, {initialState} from './reducer'
import * as selectors from './selectors'
import {name} from './__init__'
import Root from './components/Root'
import watcher from './watcher'

export {
  actions,
  reducer,
  initialState,
  selectors,
  Root,
  name,
  watcher,
}
