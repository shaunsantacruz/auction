/*eslint-env mocha */

import {expect} from 'chai'
import {reducer, initialState, name} from '../index'

describe(`${name} reducer`, () => {
  it('should return initial state by default', () => {
    const nextState = reducer(undefined, {})

    expect(nextState).to.deep.equal(initialState)
  })
})

