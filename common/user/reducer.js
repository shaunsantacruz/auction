
export const initialState = {
  id: 0,
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
  const {type} = action

  switch (type) {
    default: return state
  }
}
