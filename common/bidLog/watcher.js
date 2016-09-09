import * as bidLog from './'
import watch from 'redux-watch'
import isEqual from 'is-equal'

export default function(io, store) {
  // const BIDDER_NSP = '/bidder'
  const BROADCASTER_NSP = '/broadcaster'
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
}
