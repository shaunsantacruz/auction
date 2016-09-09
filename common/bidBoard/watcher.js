import * as bidBoard from './'
import watch from 'redux-watch'
import isEqual from 'is-equal'

export default function(io, store) {
  // const BIDDER_NSP = '/bidder'
  const BROADCASTER_NSP = '/broadcaster'
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
}
