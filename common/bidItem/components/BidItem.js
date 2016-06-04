import React from 'react'

class BidItem extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let input
    const {
      model: { bid_price },
      onBidPriceChange
    } = this.props

    return (
      <div>
        <p>Bidders</p>
        <form action="#">
          <input
            ref={node => input = node}
            type="text"
            onChange={() => {onBidPriceChange(input.value.trim())}}
            value={bid_price}
          />
        </form>
      </div>
    )
  }
}

BidItem.propTypes = {
  model: React.PropTypes.object.isRequired,
  onBidPriceChange: React.PropTypes.func.isRequired
}

export default BidItem
