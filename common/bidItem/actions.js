import { name } from './__init__'

export const SET_STATE = `${name}/SET_STATE`
export const SET_BID_PRICE = `${name}/SET_BID_PRICE`
export const SET_ID = `${name}/SET_ID`
export const SET_VARIANT = `${name}/SET_VARIANT`

export const setBidPrice = (bid_price) => ({
  type: SET_BID_PRICE,
  payload: bid_price,
  meta: {
    remote: true
  }
})
