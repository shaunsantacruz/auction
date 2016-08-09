import React, {Component, PropTypes} from 'react'
import * as bidItem from '../../bidItem'
import * as messagesByUserId from '../../messagesByUserId'

if (process.env.APP_ENV === 'client')
  var placeholder = require('../../../public/assets/img/test-1.jpg')

class Bidder extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {pathname} = this.props
    return (
      <div>
        <div className="row">
          <div className="col-xs-3">
            <div className="box">
              <p>uid: {this.props.userId}</p>
              <bidItem.Root pathname={pathname} />
            </div>
          </div>
          <div className="col-xs-9">
            <div className="box">
              <img src={placeholder} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-offset-3 col-xs-9">
            <messagesByUserId.Root />
          </div>
        </div>
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
