import * as a from './actions'

export const initialState = {
  isLobbyOpen: false,
  mutedUsersById: [],
  messages: [],
  messagesByUserId: {},
}

function isUserMuted(state, userId) {
  const { mutedUsersById } = state
  return mutedUsersById.indexOf(userId) >= 0
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
      const { userId } = payload
      return {
        ...state,
        messagesByUserId: {
          ...state.messagesByUserId,
          [userId]: messagesByID(state.messagesByUserId[userId], action)
        }
      }
    }

    case a.TOGGLE_MUTED_USER_ID: {
      const { userId } = payload
      if (!isUserMuted(state, userId)) {
        return {
          ...state,
          mutedUsersById: [
            ...state.mutedUsersById,
            userId
          ]
        }
      }
      return {
        ...state,
        mutedUsersById: state.mutedUsersById.filter((id) => id !== userId)
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
