import * as a from './actions'

export const initialState = {
  loggedInIds: [],
  byId: {},
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
      return [
        ...state,
        user.id,
      ]
    case a.REMOVE:
      return state.filter((id) => id !== user.id)
    default: return state
  }
}

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case a.REMOVE:
    case a.ADD:
      return {
        byId: byId(state.byId, action),
        loggedInIds: loggedInIds(state.loggedInIds, action),
      }
    default:
      return state
  }
}
