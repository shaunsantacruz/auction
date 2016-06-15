import { name } from './__init__'

export const SET_STATE = `${name}/SET_STATE`
export const SET_PRICE = `${name}/SET_PRICE`
export const ADJUST_PRICE = `${name}/ADJUST_PRICE`
export const SET_ID = `${name}/SET_ID`
export const SET_VARIANT = `${name}/SET_VARIANT`
export const BID_ATTEMPT = `${name}/BID_ATTEMPT`

export const setState = (state) => ({
  type: SET_STATE,
  payload: { state }
})

export const setPrice = (price) => ({
  type: SET_PRICE,
  payload: { price },
  meta: { remote: true }
})

export const adjustPrice = (price) => ({
  type: ADJUST_PRICE,
  payload: { price },
  meta: { remote: true }
})

export const handleBidAttempt = (userId) => ({
  type: BID_ATTEMPT,
  payload: {
    userId
  },
  meta: { remote: true }
})
