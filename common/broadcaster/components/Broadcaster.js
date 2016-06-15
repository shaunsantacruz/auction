import React, {
  Component,
  PropTypes,
} from 'react'

import * as bidItem from '../../bidItem'
import * as bidBoard from '../../bidBoard'

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
        </div>
      </div>
    )
  }
}

Broadcaster.propTypes = {
  userId: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
}
