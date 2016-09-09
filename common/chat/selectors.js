import {sortBy} from 'lodash'
import {compose, prop} from 'ramda'
import {name} from './__init__'
import { createSelector } from 'reselect'

export const getModel = prop(name)

export const getMessagesById = (state, userId) => {
  const model = getModel(state)
  const messages = model.messagesByChannelId[userId]

  return messages && messages.length > 0 ? sortBy(messages, 'createdAt') : []
}

export const getMutedUserIds = compose(prop('mutedUserIds'), getModel)

export const isLobbyOpen = compose(prop('isLobbyOpen'), getModel)

export const getMessages = compose(prop('messages'), getModel)

export const getMessagesWithoutMuted = createSelector(
  getMutedUserIds,
  getMessages,
  (mutedIds, messages) => messages.filter((m) => mutedIds.indexOf(m.userId) === -1)
)

export const getPrivateMessageUserIds = createSelector(
  getModel,
  (model) => Object.keys(model.messagesByChannelId).length
    ? Object.keys(model.messagesByChannelId)
    : []
)

// export const getPrivateMessages = (state) => {
//   return compose(prop('loggedInIds'), getModel)
// }
