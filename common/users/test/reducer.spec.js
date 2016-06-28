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

  it(`should handle ${a.ADD}`, () => {
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
    const nextState = reducer(undefined, a.add(user))
    expect(nextState.byId[515]).to.equal(user)
    expect(nextState.loggedInIds[0]).to.equal(user.id)
  })

  it(`should handle ${a.REMOVE}`, () => {
    const state = {
      loggedInIds: [515],
      byId: {
        515: {
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
      }
    }
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
    const nextState = reducer(state, a.remove(user))
    expect(nextState.loggedInIds).to.be.empty
  })
})
