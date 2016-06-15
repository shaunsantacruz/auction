import { compose, prop } from 'ramda'
import { name } from './__init__'

export const getModel = prop(name)

export const getPrice = compose(prop('price'), getModel)
export const getType = compose(prop('type'), getModel)
