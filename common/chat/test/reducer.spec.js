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
    expect(state).to.eql(initialState)
  })

  it(`should handle ${a.ADD}`, () => {
    const message = {
      authorName: 'Auctioneer',
      authorRole: 'broadcaster',
      text: 'Get into a flow and focus.',
      createdAt: 'timestamp',
      userId: 515
    }
    const state = reducer(undefined, a.add(message))

    expect(state.messages[0]).to.eql(message)
  })

  it(`should handle ${a.TOGGLE_LOBBY}`, () => {
    const nextState = reducer(initialState, a.toggleLobby())
    expect(nextState.isLobbyOpen).to.be.true
    const state = reducer(nextState, a.toggleLobby())
    expect(state.isLobbyOpen).to.be.false
  })

  it(`should handle ${a.TOGGLE_MUTED_USER_ID}`, () => {
    const userId = 515
    const nextState = reducer(initialState, a.toggleMutedUserId(userId))
    expect(nextState.mutedUsersById[0]).to.equal(userId)

    const state = reducer(nextState, a.toggleMutedUserId(userId))
    expect(state.mutedUsersById).to.not.equal(userId)
    expect(state.mutedUsersById).to.be.empty
  })
})
