import React, {
  Component,
  PropTypes,
} from 'react'

class BidItem extends Component {

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
  model: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
}

export default BidItem
