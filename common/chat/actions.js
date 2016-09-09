import {name} from './__init__'
import {time} from '../utils'
// external deps
// import * as user from '../user'
// import * as users from '../users'
// import {isLobbyOpen} from './selectors'

export const ADD = `${name}/ADD`
export const ADD_BY_ID = `${name}/ADD_BY_ID`
export const TOGGLE_LOBBY = `${name}/TOGGLE_LOBBY`
export const TOGGLE_MUTED_USER_ID = `${name}/TOGGLE_MUTED_USER_ID`
export const SET_MUTED_USER_IDS = `${name}/SET_MUTED_USER_IDS`
export const SET_LOBBY_OPEN_STATE = `${name}/SET_LOBBY_OPEN_STATE`

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

export const setLobbyOpenState = (openState, {remote = true} = {}) => ({
  type: TOGGLE_LOBBY,
  payload: {openState},
  meta: {remote}
})

export const toggleMutedUserId = (userId, {remote = true} = {}) => ({
  type: TOGGLE_MUTED_USER_ID,
  payload: {userId},
  meta: {remote}
})

export const setMutedUserIds = (userIds, {remote = true} = {}) => ({
  type: SET_MUTED_USER_IDS,
  payload: {userIds},
  meta: {remote}
})

// Side effects (thunk)
export function addMsg(text, channelId, currentUser, {remote = false} = {}) {
  return (dispatch) => {
    const message = createMessage(text, channelId, currentUser)

    if(channelId !== 'lobby') {
      dispatch(addById(message, channelId, {remote}))
    }else {
      dispatch(add(message, {remote}))
    }
  }
}

// testable pure action fn
export const addById = (message, channelId, {remote = false} = {}) => ({
  type: ADD_BY_ID,
  payload: {message, channelId},
  meta: {remote},
})

function createMessage(text, channelId, { fullName, role, id }) {
  return {
    fullName,
    role,
    text,
    createdAt: time(),
    channelId,
    userId: id,
  }
}
