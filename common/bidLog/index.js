import reducer, {initialState} from './reducer'
import {name} from './__init__'
import * as actions from './actions'
import Root from './components/Root'
import * as selectors from './selectors'
import watcher from './watcher'

export {
  reducer,
  initialState,
  name,
  actions,
  Root,
  selectors,
  watcher,
}
