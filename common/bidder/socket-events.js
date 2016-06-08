import * as bidItem from '../bidItem'

export default function handleSocketEvents(socket, namespace, store) {
  namespace.on('bid_state', (state) => {
    store.dispatch(bidItem.actions.setState(state))
  })
}
