import {sortBy} from 'lodash'
import {prop} from 'ramda'
import {name} from './__init__'

export const getModel = prop(name)

export const getSortedMessagesById = (state, userId) => {
  const model = getModel(state)
  const messages = model.messagesByUserId[userId]
  return messages && messages.length > 0 ? sortBy(messages, 'createdAt') : []
}
