import {name} from './__init__'

export const ADD = `${name}/ADD`
export const INIT = `${name}/INIT`

export const add = ({userId, msg}) => ({
  type: ADD,
  payload: {userId, msg},
})

export const init = ({userId}) => ({
  type: INIT,
  payload: {userId},
})
