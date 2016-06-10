import { prop } from 'ramda'
import { name } from './__init__'

export const getModel = prop(name)
export const getUser = (state, id) => state[name][id]
