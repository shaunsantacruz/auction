import * as a from './actions'

export const initialState = {}

export default (state = initialState, action) => {
  const { type, payload: { userId } = {} } = action
  switch (type) {
    case a.INIT:
      return {
        [userId]: []
      }

    case a.ADD:
      return {
        ...state,
        [userId]: messages(state[userId], action)
      }

    default:
      return state
  }
}

function messages(state = {}, action) {
  const { type, payload: { msg } } = action
  switch (type) {
    case a.ADD:
      return [
        ...state,
        { ...msg }
      ]
  }
}
