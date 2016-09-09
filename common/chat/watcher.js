import * as chat from './'
import diff from 'deep-diff'
import watch from 'redux-watch'
import isEqual from 'is-equal'

export default function(io, store) {
  const BIDDER_NSP = '/bidder'
  const BROADCASTER_NSP = '/broadcaster'
  const watchChat = watch(store.getState, chat.name, isEqual)
  store.subscribe(watchChat((newState, oldState) => {
      const differences = diff(newState, oldState)
      const {path, lhs} = differences[0]
      // console.log(differences) ->
      // [{
      //     kind: 'D',
      //     path: ['messagesByChannelId', 'f4a23'],
      //     lhs: [[Object]]
      //   }]
      if (path.length > 0 && path[0] === 'messagesByChannelId') {
        const channelId = path[1]
        const userId = channelId
        const message = newState.messagesByChannelId[channelId].slice(-1)[0]
        const { role } = message
        // If it was the broadcaster that updated the server state, send it to the bidder's room
        // Else, the bidder updated the server state and so emit to broadcaster
        if (role === 'broadcaster') {
          io.of(BIDDER_NSP).to(userId).emit('action', chat.actions.addById(message, channelId))
        } else {
          io.of(BROADCASTER_NSP).emit('action', chat.actions.addById(message, channelId))
        }
      }

      if(path.length > 0 && path[0] === 'messages') {
        const message = newState.messages.slice(-1)[0]
        const {role} = message
        // const NSP = role === 'broadcaster' ? BIDDER_NSP : BROADCASTER_NSP
        if(role === 'broadcaster') {
          io.of(BIDDER_NSP).emit('action', chat.actions.add(message))
        }else {
          io.of(BIDDER_NSP).emit('action', chat.actions.add(message))
          io.of(BROADCASTER_NSP).emit('action', chat.actions.add(message))
        }
      }

      if(path.length > 0 && path[0] === 'isLobbyOpen') {
        const openState = lhs
        console.log(openState)
        io.of(BIDDER_NSP).emit('action', chat.actions.setLobbyOpenState(openState))
      }

      if(path.length > 0 && path[0] === 'mutedUserIds') {
        const {mutedUserIds} = newState
        io.of(BIDDER_NSP).emit('action', chat.actions.setMutedUserIds(mutedUserIds))
      }
      // console.log('old', oldState)
      // console.log('new', newState)
      // console.log('diff', diff(oldState, newState))
    })
  )
}
