import {name} from './__init__'
import {time} from '../utils'
import {getModel} from './selectors'

// external deps
import * as user from '../user'
import * as users from '../users'

export const ADD = `${name}/ADD`
export const INIT = `${name}/INIT`

// Side effects (thunk)
export function addMsg(text) {
  return (dispatch, getState) => {
    const authorName = user.selectors.getFirstName(getState())
    const createdAt = time()
    const userId = users.selectors.getSelectedUserId(getState())
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
  meta: {remote: true},
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
  meta: {remote: true},
})


export const setSelected = (userId) => (dispatch) => {
  dispatch(maybeInit(userId))
  dispatch(users.actions.setSelectedUserId(userId))
}
