import React from 'react'

export default class BidBoard extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() {
    //const { recentBidder: {fullName}, price } = this.props.model
    return (
      <div className="row">
        <div className="col-xs">
          <div className="box">
            <label>Most Recent Bidder</label>

            <label>Bid Price</label>
          </div>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

BidBoard.propTypes = {
  model: React.PropTypes.object.isRequired
}
