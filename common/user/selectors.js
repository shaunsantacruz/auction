import {compose, prop} from 'ramda'
import { name } from './__init__'

export const getModel = prop(name)

export const getId = compose(prop('id'), getModel)
