import * as a from './actions'

export const initialState = {
  isLobbyOpen: false,
  mutedUserIds: [],
  messages: [],
  messagesByChannelId: {},
}

function isUserMuted(state, userId) {
  const { mutedUserIds } = state
  return mutedUserIds.indexOf(userId) > -1
}

function messagesByID(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case a.ADD_BY_ID: {
      const { message } = payload
      return [
        ...state,
        { ...message }
      ]
    }

    default:
      return state
  }
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case a.ADD: {
      const { message } = payload
      return {
        ...state,
        messages: [
          ...state.messages,
          message
        ]
      }
    }

    case a.ADD_BY_ID: {
      const { channelId } = payload
      return {
        ...state,
        messagesByChannelId: {
          ...state.messagesByChannelId,
          [channelId]: messagesByID(state.messagesByChannelId[channelId], action)
        }
      }
    }

    case a.TOGGLE_MUTED_USER_ID: {
      const { userId } = payload
      if (!isUserMuted(state, userId)) {
        return {
          ...state,
          mutedUserIds: [
            ...state.mutedUserIds,
            userId
          ]
        }
      }
      return {
        ...state,
        mutedUserIds: state.mutedUserIds.filter((id) => id !== userId)
      }
    }

    case a.SET_MUTED_USER_IDS: {
      const {userIds} = payload
      return {
        ...state,
        mutedUserIds: [...userIds]
      }
    }

    case a.TOGGLE_LOBBY:
      return {
        ...state,
        isLobbyOpen: !state.isLobbyOpen
      }

    default:
      return state
  }
}
