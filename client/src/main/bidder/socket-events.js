export default function handleSocketEvents(socket, namespace, store) {
  namespace.on('state', (state) => {
    console.log('state received', state);
    store.dispatch({type: 'SET_STATE', state})
  })
}
