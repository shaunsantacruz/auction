import {name} from './__init__'

export const ADD_USER = `${name}/ADD_USER`

export const addUser = (user) => ({
  type: ADD_USER,
  payload: { user }
})
