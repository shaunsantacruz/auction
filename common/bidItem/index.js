import * as actions from './actions'
import * as selectors from './selectors'
import reducer, {initialState, getInitialStateByType} from './reducer'
import { name } from './__init__'
import Root from './components/Root'

export {
  name,
  reducer,
  initialState,
  getInitialStateByType,
  actions,
  selectors,
  Root,
}
