import React, {
  Component,
  PropTypes,
} from 'react'

import * as bidItem from '../../bidItem'
import * as bidBoard from '../../bidBoard'
import * as bidLog from '../../bidLog'
import * as loggedInUsers from '../../loggedInUsers'
import * as messagesByUserId from '../../messagesByUserId'

export default class Broadcaster extends Component {

  render() {
    const {pathname} = this.props
    return (
      <div className="row">
        <div className="col-xs">
          <div className="box">
            <bidItem.Root pathname={pathname} />
          </div>
        </div>
        <div className="col-xs">
          <div className="box">
            <bidBoard.Root />
          </div>
          <div className="row">
            <div className="col-xs">
              <messagesByUserId.Root />
            </div>
          </div>
        </div>
        <div className="col-xs">

          <div className="box">
            Bid Log for Current Draft (most recent on top)
            <bidLog.Root />
          </div>
          <div className="box">
            Logged in users
            <loggedInUsers.Root />
          </div>

        </div>
      </div>
    )
  }
}

Broadcaster.propTypes = {
  userId: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
}
