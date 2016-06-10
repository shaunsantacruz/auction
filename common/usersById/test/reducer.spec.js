/*eslint-env mocha */

import {expect} from 'chai'
import {
  reducer,
  initialState,
  actions as a,
  name
} from '../index'

describe(`${name} reducer`, () => {
  it('should return initial state as default', () => {
    const nextState = reducer(undefined, {})
    expect(nextState).to.equal(initialState)
  })

  it(`should handle ${a.ADD_USER}`, () => {
    const user = {
      id: 515,
      fullName: 'Dan Abramov',
      firstName: 'Dan',
      lastName: 'Abromov',
      email: 'dan@awesomesauce.com',
      city: 'New York',
      state: 'NY',
      buyerNumber: 'foo_125',
      role: 'bidder',
    }
    const nextState = reducer(undefined, a.addUser(user))
    expect(nextState[515]).to.equal(user)
  })
})
