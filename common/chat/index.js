import {name} from './__init__'
import reducer, {initialState} from './reducer'
import * as actions from './actions'
import Root from './components/Root'
import * as selectors from './selectors'
import watcher from './watcher'

export {
  name,
  reducer,
  initialState,
  actions,
  Root,
  selectors,
  watcher,
}
