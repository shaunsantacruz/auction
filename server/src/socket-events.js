import watch from 'redux-watch'
import * as bidItem from '../../common/bidItem'
import * as bidBoard from '../../common/bidBoard'
import * as bidLog from '../../common/bidLog'
import * as users from '../../common/users'
import * as chat from '../../common/chat'
import {makeLog} from '../../common/utils'
import diff from 'deep-diff'
import isEqual from 'is-equal'

export default function handleSocketEvents(io, store) {
  const { dispatch } = store
  const connectedSocketsById = {}
  const DEV_MODE = process.env.NODE_ENV !== 'production'
  const BIDDER_NSP = '/bidder'
  const BROADCASTER_NSP = '/broadcaster'

  const watchChat = watch(store.getState, chat.name, isEqual)
  store.subscribe(
    watchChat((newState, oldState) => {
      const differences = diff(newState, oldState)
      const {path} = differences[0]
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
        io.of(BIDDER_NSP).emit('action', chat.actions.toggleLobby())
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

  const watchBidItem = watch(store.getState, bidItem.name, isEqual)
  store.subscribe(
    watchBidItem((newBidItem, oldBidItem) => {
      // If only difference is price, emit a price change to all connected bidders,
      // otherwise emit the entire object to them
      const differences = diff(newBidItem, oldBidItem)
      const { price } = newBidItem
      // TODO: Use action creator instead of pojo
      if (differences[0].path.length === 1 && differences[0].path[0] === 'price') {
        io
          .of(BIDDER_NSP)
          .emit(
            bidItem.actions.SET_PRICE,
            price
          )
      } else {
        io
          .of(BIDDER_NSP)
          .emit(
            bidItem.actions.MERGE_STATE,
            newBidItem
          )
      }
      //console.log('old', oldVal)
      //console.log('new', newVal)
      //console.log('diff', diff(oldVal, newVal))
    })
  )

  const watchBidBoard = watch(store.getState, bidBoard.name, isEqual)
  store.subscribe(
    watchBidBoard((state) => {
      io
        .of(BROADCASTER_NSP)
        .emit(
          bidBoard.actions.SET_STATE,
          state
        )
    })
  )

  const watchBidLog = watch(store.getState, bidLog.name, isEqual)
  store.subscribe(
    // TODO: Use action creator instead of pojo
    watchBidLog((newBidLog) => {
      const log = newBidLog.slice(-1)[0]
      io
        .of(BROADCASTER_NSP)
        .emit(
          bidLog.actions.ADD,
          log
        )
    })
    //console.log('NEW', newVal)
    //console.log(bidLog.selectors.getModel(store.getState()))
  )

  io.of(BIDDER_NSP).on('connection', (socket) => {
    if (DEV_MODE) {
      console.log('User ' + socket.id + ' connected')
      console.log('connection users', users.selectors.getLoggedInIds(store.getState()))
    }

    socket.on('action', (action) => {
      if (DEV_MODE) {
        console.log('bidder action received on server', action)
      }
      const {
        type,
        payload
      } = action

      switch (type) {
        case bidItem.actions.BID_ATTEMPT: {
          const { user, price } = payload
          const { fullName } = user
          // TODO: Does this need to be an object? Can it be a string 'fullname'?
          const recentBidder = {
            fullName
          }
          dispatch(bidBoard.actions.setRecentBidder(recentBidder))
          dispatch(bidBoard.actions.setPrice(price))
          dispatch(bidLog.actions.add(makeLog(user, price)))
          //console.log('makeLog', makeLog(user, price))
          //console.log('bidLog', bidLog.selectors.getModel(store.getState()))
          //console.log('STATE', store.getState())
          // TODO: Add bid accepted confirmation
          //io.of(BIDDER_NSP).to(id).emit('bid accepted', 'THANKS!')
          return
        }
        default: {
          dispatch({
            type,
            payload,
            meta: { remote: false }
          })
        }
      }
    })

    socket.on('disconnect', disconnect)
    socket.on('join', joinUser)
  })

  io.of(BROADCASTER_NSP).on('connection', (socket) => {

    socket.on('action', (action) => {
      if (DEV_MODE) {
        console.log('broadcaster action received on server', action)
      }
      const {
        type,
        payload
      } = action
      dispatch({
        type,
        payload,
        meta: { remote: false }
      })
    })

    socket.on('disconnect', disconnect)
    socket.on('join', joinUser)

    if (DEV_MODE) {
      console.log('User ' + socket.id + ' connected')
      console.log('connection users', users.selectors.getLoggedInIds(store.getState()))
    }
  })

  function joinUser(user) {
    // map socket id to user
    connectedSocketsById[this.id] = user
    const { id, fullName } = user
    dispatch(users.actions.add(user))
    io
      .of(BROADCASTER_NSP)
      .emit(
        users.actions.ADD,
        user
      )
    this.join(id)
    if (DEV_MODE) {
      io.of(BIDDER_NSP).to(id).emit('joined', `Hello ${fullName}`)
      console.log('join users', users.selectors.getLoggedInIds(store.getState()))
    }
  }

  function disconnect() {
    const user = connectedSocketsById[this.id]
    dispatch(users.actions.remove(user))
    io
      .of(BROADCASTER_NSP)
      .emit(
        users.actions.REMOVE,
        user
      )
    this.disconnect()
    if (DEV_MODE) {
      console.log('disconnect users', users.selectors.getLoggedInIds(store.getState()))
    }
  }
}

