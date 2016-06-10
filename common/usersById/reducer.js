import * as a from './actions'

export const initialState = {}

export default (state = initialState, action) => {
  const { type, payload: {user} = {} } = action
  switch (type) {
    case a.ADD_USER:
      return {
        ...state,
        [user.id]: user
      }
    default:
      return state
  }
}
