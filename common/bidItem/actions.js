import { name } from './__init__'

export const SET_STATE = `${name}/SET_STATE`
export const SET_PRICE = `${name}/SET_PRICE`
export const SET_ID = `${name}/SET_ID`
export const SET_VARIANT = `${name}/SET_VARIANT`

export const setState = (state) => ({
  type: SET_STATE,
  payload: {state},
  meta: {
    remote: false
  }
})

export const setPrice = (price) => ({
  type: SET_PRICE,
  payload: {price},
  meta: {
    remote: true
  }
})
