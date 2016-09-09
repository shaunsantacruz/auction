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
    expect(nextState.mutedUserIds[0]).to.equal(userId)

    const state = reducer(nextState, a.toggleMutedUserId(userId))
    expect(state.mutedUserIds).to.not.equal(userId)
    expect(state.mutedUserIds).to.be.empty
  })

  it(`should handle ${a.SET_MUTED_USER_IDS}`, () => {
    const userIds = [1,2,5,55]
    const nextState = reducer(initialState, a.setMutedUserIds(userIds))
    expect(nextState.mutedUserIds).to.eql(userIds)
  })

  it(`should handle ${a.ADD_BY_ID}`, () => {
    const state = initialState
    const channelId = 515
    let message = {
      authorName: 'Auctioneer',
      text: 'Can you pay with bitcoin?',
      createdAt: 0,
    }
    // Test First message
    let newState = reducer(state, a.addById(message, channelId))
    expect(newState.messagesByChannelId).to.eql({
      515: [message]
    })

    // Test Second message
    message = {
      authorName: 'Bidder',
      text: 'Yes I can pay with bitcoin?',
      createdAt: 1,
    }
    newState = reducer(newState, a.addById(message, channelId))
    expect(newState.messagesByChannelId).to.eql({
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
