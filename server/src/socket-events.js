import * as bidItem from '../../common/bidItem'
import * as bidBoard from '../../common/bidBoard'
import * as bidLog from '../../common/bidLog'
import * as users from '../../common/users'
import * as chat from '../../common/chat'
import {makeLog} from '../../common/utils'

export default function handleSocketEvents(io, store) {
  const { dispatch } = store
  const connectedSocketsById = {}
  const DEV_MODE = process.env.NODE_ENV !== 'production'
  const BIDDER_NSP = '/bidder'
  const BROADCASTER_NSP = '/broadcaster'

  chat.watcher(io, store)
  bidItem.watcher(io, store)
  bidBoard.watcher(io,store)
  bidLog.watcher(io, store)

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

