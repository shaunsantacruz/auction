import * as a from './actions'

export const initialState = []

export default (state = initialState, action) => {
  const { type, payload: {userId} = {} } = action
  switch (type) {
    case a.ADD_ID:
      return [
        ...state,
        userId
      ]
    case a.REMOVE_ID:
      return state.filter((id) => id !== userId)
    default:
      return state
  }
}
