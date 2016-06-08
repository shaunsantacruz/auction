import {name} from './__init__'

export const SET_RECENT_BIDDER = `${name}/SET_RECENT_BIDDER`
export const SET_STATE = `${name}/SET_STATE`
export const SET_PRICE = `${name}/SET_PRICE`

export const setPrice = (price) => ({
  type: SET_PRICE,
  payload: {price}
})

export const setRecentBidder = (recentBidder) => ({
  type: SET_RECENT_BIDDER,
  payload: {recentBidder}
})

export const setState = (newState) => ({
  type: SET_STATE,
  payload: {newState}
})
