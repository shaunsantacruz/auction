import * as actions from './actions'
import * as selectors from './selectors'
import reducer, {initialState} from './reducer'
import { name } from './__init__'
import Root from './components/Root'

export {
  name,
  reducer,
  initialState,
  actions,
  selectors,
  Root
}
