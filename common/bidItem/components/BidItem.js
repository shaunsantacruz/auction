import React from 'react'

class BidItem extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let input
    const {
      model: { price },
      onPriceChange
    } = this.props

    return (
      <div>
        <p>Bidders</p>
        <form action="#">
          <input
            ref={node => input = node}
            type="text"
            onChange={() => {onPriceChange(input.value.trim())}}
            value={price}
          />
        </form>
      </div>
    )
  }
}

BidItem.propTypes = {
  model: React.PropTypes.object.isRequired,
  onPriceChange: React.PropTypes.func.isRequired
}

export default BidItem
