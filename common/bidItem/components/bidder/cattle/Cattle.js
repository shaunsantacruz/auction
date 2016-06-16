import React, {
  Component,
  PropTypes,
} from 'react'

import {formatMoney} from '../../../../utils'

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
        <form action="#">
          <input
            ref={node => input = node}
            type="text"
            readOnly
            value={formatMoney(price)}
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
