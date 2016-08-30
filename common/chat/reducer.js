import * as a from './actions'

export const initialState = {
  isLobbyOpen: false,
  mutedUsersById: [],
  messages: [],
}

function isUserMuted(state, userId) {
  const {mutedUsersById} = state
  return mutedUsersById.indexOf(userId) >= 0
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case a.ADD: {
      const {message} = payload
      return {
        ...state,
        messages: [
          ...state.messages,
          message
        ]
      }
    }

    case a.TOGGLE_MUTED_USER_ID: {
      const {userId} = payload
      if(!isUserMuted(state, userId)) {
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
