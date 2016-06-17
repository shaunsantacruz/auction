/*eslint-env mocha */

import {expect} from 'chai'
import {
  reducer,
  initialState,
  name,
  actions as a,
} from '../index'

describe(`${name} reducer`, () => {
  it('should return initial state by default', () => {
    const nextState = reducer(undefined, {})
    expect(nextState).to.deep.equal(initialState)
  })

  it(`should handle ${a.ADD}`, () => {
    const log = {
      userId: 515,
      fullName: 'Paul Irish',
      amount: 31550,
      buyerNumber: 'foo_123',
      createdAt: 'timestamp',
    }
    const nextState = reducer(undefined, a.add(log))
    expect(nextState).to.be.an.array
    expect(nextState[0].userId).to.equal(515)
  })



})
