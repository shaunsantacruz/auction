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
    expect(state).to.deep.equal({})
  })

  it(`should handle ${a.INIT}`, () => {
    const state = reducer(undefined, a.init({userId: 515}))
    expect(state).to.deep.equal({
      515: []
    })
  })

  it(`should handle ${a.ADD}`, () => {
    const state = initialState
    let msg = {
      id: 1,
      authorName: 'Auctioneer',
      text: 'Yes, we accept bitcoin.',
      createdAt: 'timestamp',
    }
    // Test First message
    const userId = 515
    let newState = reducer(state, a.add({userId, msg}))
    expect(newState).to.deep.equal({
      515: [
        {
          id: 1,
          authorName: 'Auctioneer',
          text: 'Yes, we accept bitcoin.',
          createdAt: 'timestamp',
        }
      ]
    })

    // Test Second message
    msg.id = 2
    newState = reducer(newState, a.add({userId, msg}))
    expect(newState).to.deep.equal({
      515: [
        {
          id: 1,
          authorName: 'Auctioneer',
          text: 'Yes, we accept bitcoin.',
          createdAt: 'timestamp',
        },
        {
          id: 2,
          authorName: 'Auctioneer',
          text: 'Yes, we accept bitcoin.',
          createdAt: 'timestamp',
        },
      ]
    })
  })
})
