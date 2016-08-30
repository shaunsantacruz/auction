import {name} from './__init__'
import {time} from '../utils'
// external deps
import * as user from '../user'
import * as users from '../users'

export const ADD = `${name}/ADD`
export const ADD_BY_ID = `${name}/ADD_BY_ID`
export const TOGGLE_LOBBY = `${name}/TOGGLE_LOBBY`
export const TOGGLE_MUTED_USER_ID = `${name}/TOGGLE_MUTED_USER_ID`



export const add = (message, {remote = true} = {}) => ({
  type: ADD,
  payload: {message},
  meta: {remote}
})

export const toggleLobby = ({remote = true} = {}) => ({
  type: TOGGLE_LOBBY,
  payload: '',
  meta: {remote}
})

export const toggleMutedUserId = (userId, {remote = false} = {}) => ({
  type: TOGGLE_MUTED_USER_ID,
  payload: {userId},
  meta: {remote}
})

// Side effects (thunk)
export function addMsgById(text, {remote = false} = {}) {
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
    dispatch(addById(userId, message, {remote}))
  }
}

// testable pure action fn
export const addById = (userId, message, {remote = false} = {}) => ({
  type: ADD_BY_ID,
  payload: {userId, message},
  meta: {remote},
})

