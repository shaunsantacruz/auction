import * as bidItem from '../../../../common/bidItem'

export default function handleSocketEvents(socket, namespace, store) {
  namespace.on('bid_state', (state) => {
    store.dispatch(bidItem.actions.setBidItemState(state))
  })
}
