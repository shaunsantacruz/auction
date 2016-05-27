/*eslint-env mocha */

import {expect} from 'chai'
import {reducer, initialState, actions as a} from '../../common/bidItem'

describe('bidItem reducer', () => {

  it('should should return initial state as default', () => {
    const nextState = reducer(undefined, {})
    expect(nextState).to.deep.equal(initialState)
  })

  it('should be able to load state', () => {
    const action = {
      type: a.SET_STATE,
      initialState // use initial state to test. Could be any object
    }
    const nextState = reducer(undefined, action)
    expect(nextState).to.deep.equal(initialState)
  })

  it('should set and update a bid price', () => {
    let bid_price = 2000
    let action = {
      type: a.SET_BID_PRICE,
      bid_price
    }
    const state = reducer(initialState, action)
    expect(state.bid_price).to.equal(2000)

    bid_price = 2300
    action = {
      type: a.SET_BID_PRICE,
      bid_price
    }
    const nextState = reducer(state, action)
    expect(nextState.bid_price).to.equal(2300)
  })

  it('should set draft #/ID', () => {
    const draft_num = 5
    const id = draft_num
    const action = {
      type: a.SET_ID,
      id
    }
    const state = reducer(initialState, action)
    expect(state.id).to.equal(5)
  })

  it('should handle variants', () => {
    const variant = 'golden'
    const action = {
      type: a.SET_VARIANT,
      variant
    }
    const state = reducer(initialState, action)
    expect(state.variant).to.equal('golden')
  })

  // May go with this. May not.
  //it('should handle updating entire state', () => {
  //  const bidItem = {
  //    ...initialState,
  //    bid_price: 2000
  //  }
  //  let action = {
  //    type: a.EDIT,
  //    bidItem
  //  }
  //  const state = reducer(initialState, action)
  //  expect(state.bid_price).to.equal(2000)
  //})
})
