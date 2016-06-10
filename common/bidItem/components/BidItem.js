import React from 'react'

class BidItem extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let input
    const {
      model: { price },
      userId,
      onClickHandler
    } = this.props

    return (
      <div>
        <p>Bidders</p>
        <form action="#">
          <input
            ref={node => input = node}
            type="text"
            readOnly
            value={price}
          />
          <button onClick={() => {onClickHandler(userId)}}>
            Bid Now!
          </button>
        </form>
      </div>
    )
  }
}

BidItem.propTypes = {
  model: React.PropTypes.object.isRequired,
  userId: React.PropTypes.number.isRequired,
  onClickHandler: React.PropTypes.func.isRequired
}

export default BidItem
