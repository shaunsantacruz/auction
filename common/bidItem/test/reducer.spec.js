/*eslint-env mocha */

import {expect} from 'chai'
import {reducer, initialState, actions as a} from '../index'

describe('bidItem reducer', () => {

  it('should return initial state as default', () => {
    const nextState = reducer(undefined, {})
    expect(nextState).to.deep.equal(initialState)
  })

  it('should be able to load state', () => {
    const state = initialState;
    const action = {
      type: a.SET_STATE,
      payload: {state}// use initial state to test. Could be any object
    }
    const nextState = reducer(undefined, action)
    expect(nextState).to.deep.equal(initialState)
  })

  it('should set a bid price', () => {
    let price = 2000
    let action = {
      type: a.SET_PRICE,
      payload: {price}
    }
    const state = reducer(initialState, action)
    expect(state.price).to.equal(2000)

    price = 2300
    action = {
      type: a.SET_PRICE,
      payload: {price}
    }
    const nextState = reducer(state, action)
    expect(nextState.price).to.equal(2300)
  })

  it('should be able to update a price', () => {
    let nextState = reducer(undefined, a.updatePrice(1000))
    expect(nextState.price).to.equal(1000)

    const state = {
      price: 2000
    }

    nextState = reducer(state, a.updatePrice(500))
    expect(nextState.price).to.equal(2500)
  })

  it('should set draft #/ID', () => {
    const draft_num = 5
    const id = draft_num
    const action = {
      type: a.SET_ID,
      payload: {id}
    }
    const state = reducer(initialState, action)
    expect(state.id).to.equal(5)
  })

  it('should handle variants', () => {
    const variant = 'golden'
    const action = {
      type: a.SET_VARIANT,
      payload: {variant}
    }
    const state = reducer(initialState, action)
    expect(state.variant).to.equal('golden')
  })

})
