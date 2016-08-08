import {name} from './__init__'
import {compose, prop} from 'ramda'

export const getModel = prop(name)
export const getSelectedUserId = compose(prop('selectedUserId'), getModel)
