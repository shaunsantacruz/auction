import * as bidItem from './'
import diff from 'deep-diff'
import watch from 'redux-watch'
import isEqual from 'is-equal'

export default function(io, store) {
  const BIDDER_NSP = '/bidder'
  // const BROADCASTER_NSP = '/broadcaster'
  const watchBidItem = watch(store.getState, bidItem.name, isEqual)
  store.subscribe(watchBidItem((newBidItem, oldBidItem) => {
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
}
