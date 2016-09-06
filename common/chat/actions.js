import {name} from './__init__'
import {time} from '../utils'
// external deps
import * as user from '../user'
import * as users from '../users'
import {isLobbyOpen} from './selectors'

export const ADD = `${name}/ADD`
export const ADD_BY_ID = `${name}/ADD_BY_ID`
export const TOGGLE_LOBBY = `${name}/TOGGLE_LOBBY`
export const TOGGLE_MUTED_USER_ID = `${name}/TOGGLE_MUTED_USER_ID`



export const add = (text, {remote = true} = {}) => ({
  type: ADD,
  payload: {text},
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
    const isLobbyOpen = isLobbyOpen(state)
    const selectedUserId = users.selectors.getSelectedUserId(state)
    const isLobbySelected = selectedUserId == 0 && isLobbyOpen
    const authorName = user.selectors.getFirstName(state)
    const authorRole = user.selectors.getRole(state)
    const createdAt = time()
    // Note: Broadcaster in only concerned with users.selectedUserId. Bidder is not
    const userId = authorRole === 'broadcaster'
      ? selectedUserId
      : user.selectors.getId(state)

    const message = {
      authorName,
      authorRole,
      text,
      createdAt,
      userId: user.selectors.getId(state)
    }

    if(!isLobbySelected) 
      dispatch(addById(userId, message, {remote}))
    }else {
      dispatch(add(message, {remote}))
    }
  }
}

// testable pure action fn
export const addById = (userId, message, {remote = false} = {}) => ({
  type: ADD_BY_ID,
  payload: {userId, message},
  meta: {remote},
})

