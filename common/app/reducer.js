function setState(state, newState) {
  return {
    ...state,
    newState
  }
}

export default function(state = {}, action) {
  console.log('reduced');
  switch (action.type) {
    case 'SET_STATE':
      console.log('r', action.state);
      return setState(state, action.state)
    default:
      return state
  }
}
