import {name} from './__init__'

export const ADD = `${name}/ADD`
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
