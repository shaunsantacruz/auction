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

  it(`should handle ${a.ADD_BY_ID}`, () => {
    const state = initialState
    const userId = 515
    let message = {
      authorName: 'Auctioneer',
      text: 'Can you pay with bitcoin?',
      createdAt: 0,
    }
    // Test First message
    let newState = reducer(state, a.addById(userId, message))
    expect(newState.messagesByUserId).to.eql({
      515: [message]
    })

    // Test Second message
    message = {
      authorName: 'Bidder',
      text: 'Yes I can pay with bitcoin?',
      createdAt: 1,
    }
    newState = reducer(newState, a.addById(userId, message))
    expect(newState.messagesByUserId).to.eql({
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
