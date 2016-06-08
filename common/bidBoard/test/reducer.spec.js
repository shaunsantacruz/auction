/*eslint-env mocha */

import {expect} from 'chai'
import {
  reducer,
  initialState,
  actions as a,
  selectors,
  name
} from '../index'

describe(`${name} reducer`, () => {
  it('should return initial state as default', () => {
    const nextState = reducer(undefined, {})
    expect(nextState).to.equal(initialState)
  })

  it(`should handle ${a.SET_PRICE}`, () => {
    const price = 40;
    const nextState = reducer(undefined, a.setPrice(price))
    expect(nextState.price).to.equal(40)
  })

  it(`should handle ${a.SET_RECENT_BIDDER}`, () => {
    const recentBidder = {
      fullName: 'Mark Twain',
      userId: 50,
      createdAt: 123456789
    }
    const nextState = reducer(undefined, a.setRecentBidder(recentBidder))
    expect(nextState.recentBidder).to.deep.equal(recentBidder)
  })

  it(`should handle ${a.SET_STATE}`, () => {
    const newState = {
      recentBidder: {
        fullName: 'Fleetwood Mac',
        userId: 1337,
        createdAt: 123456789
      },
      price: 100
    }
    const nextState = reducer(undefined, a.setState(newState))
    expect(nextState).to.deep.equal(newState)
  })
})
