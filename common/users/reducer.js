import * as a from './actions'

export const initialState = {
  loggedInIds: [],
  byId: {},
  selectedUserId: 0,
}

function byId(state = initialState.byId, action) {
  const { type, payload: {user} = {} } = action
  switch (type) {
    case a.ADD:
      return {
        ...state,
        [user.id]: user
      }
    default: return state
  }
}

function loggedInIds(state = initialState.loggedInIds, action) {
  const { type, payload: {user} = {} } = action
  switch (type) {
    case a.ADD:
      return state.indexOf(user.id) === -1
        ? [...state, user.id]
        : state
    case a.REMOVE:
      return state.filter((id) => id !== user.id)
    default: return state
  }
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case a.REMOVE:
    case a.ADD:
      return {
        ...state,
        byId: byId(state.byId, action),
        loggedInIds: loggedInIds(state.loggedInIds, action),
      }

    case a.SET_SELECTED_USER_ID: {
      const { userId } = payload
      return {
        ...state,
        selectedUserId: userId
      }
    }

    default:
      return state
  }
}
