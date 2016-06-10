import {
  Component,
  PropTypes,
} from 'react'

export default class SocketProvider extends Component {
  getChildContext() {
    return {
      socket: this.props.socket,
      namespace: this.props.namespace,
    }
  }

  render() {
    return this.props.children
  }
}

SocketProvider.childContextTypes = {
  socket: PropTypes.object.isRequired,
  namespace: PropTypes.object.isRequired,
}
SocketProvider.propTypes = {
  children: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired,
  namespace: PropTypes.object.isRequired,
}
