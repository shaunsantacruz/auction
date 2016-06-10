/*eslint-env mocha */

import {expect} from 'chai'
import {
  reducer,
  initialState,
  name,
  actions as a
} from '../index'

describe(`${name} reducer`, () => {
  it('should return initial state by default', () => {
    const nextState = reducer(undefined, {})
    expect(nextState).to.deep.equal(initialState)
  })

  it(`should handle ${a.SET_STATE}`, () => {
    const user = {
      id: '515',
      fullName: 'Dan Abromov',
      firstName: 'Dan',
      lastName: 'Abromov',
      email: 'dan@email.com',
      city: 'New York',
      state: 'NY',
      buyerNumber: 'foo_123',
      role: 'bidder',
    }
    const nextState = reducer(undefined, a.setState(user))
    expect(nextState).to.equal(user)
  })
})

