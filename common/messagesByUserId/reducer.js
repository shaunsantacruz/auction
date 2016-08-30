import * as a from './actions'

export const initialState = {}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case a.ADD: {
      const { userId } = payload
      return {
        ...state,
        [userId]: messages(state[userId], action)
      }
    }

    default:
      return state
  }
}

function messages(state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case a.ADD: {
      const {message} = payload
      return [
        ...state,
        {...message}
      ]
    }

    default: return state
  }
}
