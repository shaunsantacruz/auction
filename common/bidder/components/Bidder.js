import React, {Component, PropTypes} from 'react'
import * as bidItem from '../../bidItem'

class Bidder extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {pathname} = this.props
    return (
      <div>
        <p>uid: {this.props.userId}</p>
        <bidItem.Root pathname={pathname} />
      </div>
    )
  }
}

Bidder.propTypes = {
  userId: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
}
//Bidder.contextTypes = {
//  namespace: PropTypes.object,
//}

export default Bidder
