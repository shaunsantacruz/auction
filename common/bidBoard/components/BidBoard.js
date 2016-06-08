import React from 'react'

export default class BidBoard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { recentBidder: {fullName}, price } = this.props.model
    return (
      <div className="row">
        <div className="col-xs">
          <div className="box">
            <label>Most Recent Bidder</label>
            <input type="text" value={fullName} />
          </div>
        </div>
        <div className="col-xs">
          <div className="box">
            <label>Bid Price</label>
            <input type="text" value={price} />
          </div>
        </div>
      </div>
    )
  }
}

BidBoard.propTypes = {
  model: React.PropTypes.object.isRequired
}
