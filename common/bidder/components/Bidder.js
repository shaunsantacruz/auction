import React, {Component, PropTypes} from 'react'
import * as bidItem from '../../bidItem'

class Bidder extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        <p>uid: {this.props.userId}</p>
        <bidItem.Root />
      </div>
    )
  }
}

Bidder.propTypes = {
  userId: PropTypes.string.isRequired
}
Bidder.contextTypes = {
  socket: React.PropTypes.object,
  namespace: React.PropTypes.object,
}

export default Bidder
