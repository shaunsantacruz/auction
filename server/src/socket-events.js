import watch from 'redux-watch'
import * as bidItem from '../../common/bidItem'
import * as bidBoard from '../../common/bidBoard'
import * as bidLog from '../../common/bidLog'
import * as users from '../../common/users'
import {makeLog} from '../../common/utils'
import diff from 'deep-diff'
import isEqual from 'is-equal'


export default function handleSocketEvents(socketServer, store) {
  const { dispatch } = store
  const connectedSocketsById = {}
  const DEV_MODE = process.env.NODE_ENV !== 'production'
  const BIDDER_NSP = '/bidder'
  const BROADCASTER_NSP = '/broadcaster'

  const watchBidItem = watch(store.getState, bidItem.name, isEqual)
  store.subscribe(
    watchBidItem((newBidItem, oldBidItem) => {
      // If only difference is price, emit a price change to all connected bidders,
      // otherwise emit the entire object to them
      const differences = diff(newBidItem, oldBidItem)
      const {price} = newBidItem
      if (differences[0].path.length === 1 && differences[0].path[0] === 'price') {
        socketServer
          .of(BIDDER_NSP)
          .emit(
            bidItem.actions.SET_PRICE,
            price
          )
      } else {
        socketServer
          .of(BIDDER_NSP)
          .emit(
            bidItem.actions.SET_STATE,
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
      socketServer
        .of(BROADCASTER_NSP)
        .emit(
          bidBoard.actions.SET_STATE,
          state
        )
    })
  )

  const watchBidLog = watch(store.getState, bidLog.name, isEqual)
  store.subscribe(
    watchBidLog((newBidLog) => {
      const log = newBidLog.slice(-1)[0]
      socketServer
        .of(BROADCASTER_NSP)
        .emit(
          bidLog.actions.ADD,
          log
        )
    })
    //console.log('NEW', newVal)
    //console.log(bidLog.selectors.getModel(store.getState()))
  )

  socketServer.of(BIDDER_NSP).on('connection', (socket) => {
    if (DEV_MODE) {
      console.log('User ' + socket.id + ' connected')
      console.log('connection users', users.selectors.getLoggedInIds(store.getState()))
    }

    socket.on('action', (action) => {
      if (DEV_MODE) {
        console.log('bidder action received on server', action)
      }
      const { type } = action
      switch (type) {
        case bidItem.actions.BID_ATTEMPT:
        {
          const {user, price} = action.payload
          const {fullName} = user
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
          //socketServer.of(BIDDER_NSP).to(id).emit('bid accepted', 'THANKS!')
          return
        }
        default:
          null
      }
    })

    socket.on('disconnect', disconnect)
    socket.on('join', joinUser)
  })

  socketServer.of(BROADCASTER_NSP).on('connection', (socket) => {

    socket.on('action', (action) => {
      if (DEV_MODE) {
        console.log('broadcaster action received on server', action)
      }
      const {
        type,
        payload: { price, state } = {}
        } = action
      switch (type) {
        case bidItem.actions.SET_PRICE:
          dispatch(bidItem.actions.setPrice(price))
          break
        case bidItem.actions.MERGE_STATE:
          dispatch(bidItem.actions.mergeState(state))
          break
        default:
          null
      }
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
    const {id, fullName} = user
    dispatch(users.actions.add(user))
    socketServer
      .of(BROADCASTER_NSP)
      .emit(
        users.actions.ADD,
        user
      )
    this.join(id)
    if (DEV_MODE) {
      socketServer.of(BIDDER_NSP).to(id).emit('joined', `Hello ${fullName}`)
      console.log('join users', users.selectors.getLoggedInIds(store.getState()))
    }
  }

  function disconnect() {
    const user = connectedSocketsById[this.id]
    dispatch(users.actions.remove(user))
    socketServer
      .of(BROADCASTER_NSP)
      .emit(
        users.actions.REMOVE,
        user
      )
    if (DEV_MODE) {
      console.log('disconnect users', users.selectors.getLoggedInIds(store.getState()))
    }
  }
}

