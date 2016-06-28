import {name} from './__init__'

export const ADD = `${name}/ADD`
export const REMOVE = `${name}/REMOVE`

export const add = (user) => ({
  type: ADD,
  payload: { user },
})

export const remove = (user) => ({
  type: REMOVE,
  payload: { user },
})
