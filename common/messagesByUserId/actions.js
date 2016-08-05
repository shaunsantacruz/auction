import {name} from './__init__'
import {time} from '../utils'
import {getModel, getActiveUserId} from './selectors'

// external deps
import * as user from '../user'

export const ADD = `${name}/ADD`
export const INIT = `${name}/INIT`
export const SET_ACTIVE_USER_ID = `${name}/SET_ACTIVE_USER_ID`

// Side effects (thunk)
export function addMsg(text) {
  return (dispatch, getState) => {
    const authorName = user.selectors.getFirstName(getState())
    const createdAt = time()
    const userId = getActiveUserId(getState())
    const message = {
      authorName,
      text,
      createdAt,
    }
    dispatch(add(userId, message))
  }
}

// testable pure action fn
export const add = (userId, message) => ({
  type: ADD,
  payload: {userId, message},
})

// Side effects (thunk)
export const maybeInit = (userId) => (dispatch, getState) => {
  const model = getModel(getState())
  if(model[userId] === undefined) {
    dispatch(init(userId))
  }
}

// testable pure action fn
export const init = (userId) => ({
  type: INIT,
  payload: {userId},
})

export const setActiveUserId = (userId) => ({
  type: SET_ACTIVE_USER_ID,
  payload: {userId}
})

export const setActive = (userId) => (dispatch) => {
  dispatch(maybeInit(userId))
  dispatch(setActiveUserId(userId))
}
