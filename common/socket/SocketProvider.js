import {
  Component,
  PropTypes,
} from 'react'

export default class SocketProvider extends Component {
  getChildContext() {
    return {
      namespace: this.props.namespace,
    }
  }

  render() {
    return this.props.children
  }
}

SocketProvider.childContextTypes = {
  namespace: PropTypes.object.isRequired,
}
SocketProvider.propTypes = {
  children: PropTypes.object.isRequired,
  namespace: PropTypes.object.isRequired,
}
