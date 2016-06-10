import {name} from './__init__'

export const ADD_ID = `${name}/ADD_ID`
export const REMOVE_ID = `${name}/REMOVE_ID`

export const addId = (userId) => ({
  type: ADD_ID,
  payload: { userId }
})

export const removeId = (userId) => ({
  type: REMOVE_ID,
  payload: { userId }
})
