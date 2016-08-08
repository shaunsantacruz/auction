/*eslint-env mocha */

import {expect} from 'chai'
import {
  reducer,
  initialState,
  actions as a,
  name
} from '../index'


describe(`${name} reducer`, () => {
  it('should return default state', () => {
    const state = reducer(undefined, {})
    expect(state).to.deep.equal(initialState)
  })

  it(`should handle ${a.INIT}s`, () => {
    // initilize first
    let state = reducer(undefined, a.init(515))
    expect(state).to.deep.equal({
      515: []
    })

    // initilize a second
    state = reducer(state, a.init(520))
    expect(state).to.deep.equal({
      515: [],
      520: []
    })
  })

  it(`should handle ${a.ADD}`, () => {
    const state = initialState
    const userId = 515
    let message = {
      authorName: 'Auctioneer',
      text: 'Can you pay with bitcoin?',
      createdAt: 0,
    }
    // Test First message
    let newState = reducer(state, a.add(userId, message))
    expect(newState).to.deep.equal({
      515: [message]
    })

    // Test Second message
    message = {
      authorName: 'Bidder',
      text: 'Yes I can pay with bitcoin?',
      createdAt: 1,
    }
    newState = reducer(newState, a.add(userId, message))
    expect(newState).to.deep.equal({
      515: [{
        authorName: 'Auctioneer',
        text: 'Can you pay with bitcoin?',
        createdAt: 0,
      },
      {
        authorName: 'Bidder',
        text: 'Yes I can pay with bitcoin?',
        createdAt: 1,
      }]
    })
  })
})
