import {name} from './__init__'
import {prop} from 'ramda'
import {sortBy} from 'lodash'

export const getModel = prop(name)

export const getSortedMessagesById = (state, userId) => {
  const model = getModel(state)
  const messages = model[userId]
  return messages && messages.length > 0 ? sortBy(messages, 'createdAt') : []
}
