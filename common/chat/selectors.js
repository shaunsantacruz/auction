import {sortBy} from 'lodash'
import {compose, prop} from 'ramda'
import {name} from './__init__'
import { createSelector } from 'reselect'

export const getModel = prop(name)

export const getMessagesById = (state, userId) => {
  const model = getModel(state)
  const messages = model.messagesByUserId[userId]

  return messages && messages.length > 0 ? sortBy(messages, 'createdAt') : []
}

export const getMutedUsersIds = compose(prop('mutedUserIds'), getModel)

export const isLobbyOpen = compose(prop('isLobbyOpen'), getModel)


export const getPrivateMessageUserIds = createSelector(
  getModel,
  (model) => Object.keys(model.messagesByUserId).length
    ? Object.keys(model.messagesByUserId)
    : []
)

// export const getPrivateMessages = (state) => {
//   return compose(prop('loggedInIds'), getModel)
// }
