import {name} from './__init__'

export const ADD = `${name}/ADD`
export const REMOVE = `${name}/REMOVE`
export const SET_SELECTED_USER_ID = `${name}/SET_SELECTED_USER_ID`

export const add = (user) => ({
  type: ADD,
  payload: { user },
})

export const remove = (user) => ({
  type: REMOVE,
  payload: { user },
})

export const setSelectedUserId = (userId) => ({
  type: SET_SELECTED_USER_ID,
  payload: {userId},
  meta: {remote: true},
})
