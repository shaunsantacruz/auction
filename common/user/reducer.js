import * as a from './actions'

export const initialState = {
  id: null,
  fullName: null,
  firstName: null,
  lastName: null,
  email: null,
  city: null,
  state: null,
  buyerNumber: null,
  role: null,
}

export default (state = initialState, action) => {
  const {type, payload: {user} = {}} = action

  switch (type) {
    case a.SET_STATE: {
      return user
    }
    default:
      return state
  }
}
