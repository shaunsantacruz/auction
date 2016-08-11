import {name} from './__init__'
import {time} from '../utils'
// import {getModel} from './selectors'

// external deps
import * as user from '../user'
import * as users from '../users'

export const ADD = `${name}/ADD`
export const INIT = `${name}/INIT`

// Side effects (thunk)
export function addMsg(text, {remote = false} = {}) {
  return (dispatch, getState) => {
    const state = getState()
    const authorName = user.selectors.getFirstName(state)
    const authorRole = user.selectors.getRole(state)
    const createdAt = time()
    // Note: Broadcaster sets key users.selectedUserId & Bidder does not
    // Check state for user.selectedUserId
    const userId = state[users.name]['selectedUserId'] !== 0
      ? users.selectors.getSelectedUserId(state)
      : user.selectors.getId(state)


    const message = {
      authorName,
      authorRole,
      text,
      createdAt,
    }
    dispatch(add(userId, message, {remote}))
  }
}

// testable pure action fn
export const add = (userId, message, {remote = false} = {}) => ({
  type: ADD,
  payload: {userId, message},
  meta: {remote},
})

