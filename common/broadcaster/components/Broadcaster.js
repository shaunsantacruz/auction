import React, {
  Component,
  PropTypes,
} from 'react'

import * as bidItem from '../../bidItem'
import * as bidBoard from '../../bidBoard'
import * as bidLog from '../../bidLog'
// eslist is throwing a false positive on users so ignore it for now
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "users" }]*/
import * as users from '../../users'
import * as chat from '../../chat'

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
          <div className="box mt-10">
            <chat.Root pathname={pathname} />
          </div>
        </div>
        <div className="col-xs">
          <div className="box">
            <bidLog.Root />
          </div>
          <div className="box mt-10">
            <users.components.LoggedInUsers />
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
