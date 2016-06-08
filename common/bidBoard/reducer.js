import * as a from './actions'

export const initialState = {
  recentBidder: {
    fullName: '-',
    userId: 0,
    createdAt: null
  },
  price: 0
}

export default (state = initialState, action) => {
  const { type, payload: {price, recentBidder} = {} } = action
  switch (type) {
    case a.SET_PRICE: {
      return {
        ...state,
        price
      }
    }
    case a.SET_RECENT_BIDDER: {
      return {
        ...state,
        recentBidder
      }
    }
    case a.SET_STATE: {
      const {payload: {newState}} = action
      return newState
    }
    default: return state
  }
}
