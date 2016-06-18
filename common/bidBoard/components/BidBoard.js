import React, {
  Component,
  PropTypes,
} from 'react'
import {formatMoney} from '../../utils'

export default class BidBoard extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { recentBidder: {fullName}, price } = this.props.model
    return (
      <div className="row">
        <div className="col-xs">
          <div className="box">
            <label>Most Recent Bidder</label>
            <input readOnly type="text" value={fullName} />
          </div>
        </div>
        <div className="col-xs">
          <div className="box">
            <label>Bid Price</label>
            <input readOnly type="text" value={formatMoney(price)} />
          </div>
        </div>
      </div>
    )
  }
}

BidBoard.propTypes = {
  model: PropTypes.object.isRequired
}
