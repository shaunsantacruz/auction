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

  it(`should handle ${a.ADD_ID}`, () => {
    const prevState = [515,100,75]
    const nextState = reducer(prevState, a.addId(700))
    expect(nextState).to.be.an.array
    expect(nextState).to.deep.equal([...prevState, 700])
  })

  it(`should handle ${a.REMOVE_ID}`, () => {
    const prevState = [515,100,75,700]
    const nextState = reducer(prevState, a.removeId(75))
    expect(nextState).to.be.an.array
    expect(nextState).to.deep.equal([515,100,700])
  })

  it('should not allow duplicate userIds to be added', () => {
    const prevState = [515,100,75, 700]
    const nextState = reducer(prevState, a.addId(700))
    expect(nextState).to.be.an.array
    expect(nextState).to.deep.equal([...prevState])
  })
})
