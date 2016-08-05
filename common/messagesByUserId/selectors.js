import {name} from './__init__'
import {compose, prop} from 'ramda'

export const getModel = prop(name)
export const getActiveUserId = compose(prop('activeUserId'), getModel)
