import {compose, prop} from 'ramda'
import { name } from './__init__'
import {createSelector} from 'reselect'

import {selectors as chat} from '../chat'

export const getModel = prop(name)

export const getId = compose(prop('id'), getModel)
// export const getRole = compose(prop('role'), getModel)
// export const getFirstName = compose(prop('firstName'), getModel)
// export const isBroadcaster = createSelector(
//   getRole,
//   (role) => role === 'broadcaster'
// )

export const isUserMuted = createSelector(
  getId,
  chat.getMutedUserIds,
  (userId, mutedUserIds) => mutedUserIds.indexOf(userId) > -1
)
