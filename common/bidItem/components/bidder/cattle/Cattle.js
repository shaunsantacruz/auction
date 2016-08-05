import React, {
  Component,
  PropTypes,
} from 'react'

import {formatMoney} from '../../../../utils'

if (process.env.APP_ENV === 'client')
  require('./cattle.scss')

class BidItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let input
    const {
      model,
      user,
      onClickHandler
      } = this.props

    const {
      price,
      headCount,
      // id,
      variant,
      weight,
      averageWeight,
      pricePer,
    } = model

    return (
      <div>
        <form action="#" className="cattle-bid-item-bidder">
          <p>
            <label># Head:</label>
            <input type="text" value={headCount}/>
          </p>
          <p>
            <label>Weight:</label>
            <input type="text" value={weight}/>
          </p>
          <p>
            <label>Avg. Wt:</label>
            <input type="text" value={averageWeight}/>
          </p>
          <p>
            <label>$/Head:</label>
            <input type="text" value={pricePer}/>
          </p>
          <p>
            <label>Sex:</label>
            <input type="text" value={variant}/>
          </p>
          <p>
            <label>Price:</label>
            <input
              ref={node => input = node}
              type="text"
              readOnly
              value={formatMoney(price)}
            />
          </p>
          <p>
            <button onClick={(e) => {
              e.preventDefault()
              onClickHandler(user, price)
            }}>
              Bid Now!
            </button>
          </p>
        </form>
      </div>
    )
  }
}

BidItem.propTypes = {
  model: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onClickHandler: PropTypes.func.isRequired
}

export default BidItem
