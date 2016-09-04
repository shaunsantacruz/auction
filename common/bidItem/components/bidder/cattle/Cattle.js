import React, {
  Component,
  PropTypes,
} from 'react'
import CurrencyInput from 'react-currency-input'

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
            <input type="text" readOnly value={headCount}/>
          </p>
          <p>
            <label>Weight:</label>
            <input type="text" readOnly value={weight}/>
          </p>
          <p>
            <label>Avg. Wt:</label>
            <input type="text" readOnly value={averageWeight}/>
          </p>
          <p>
            <label>$/Head:</label>
            <input type="text" readOnly value={pricePer}/>
          </p>
          <p>
            <label>Sex:</label>
            <input type="text" readOnly value={variant}/>
          </p>
          <p>
            <label>Price:</label>
            <span className="input-group">
              <span className="input-group-addon">$</span>
              <CurrencyInput
                readOnly
                value={price.toString()}
              />
            </span>
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
