import React, {
  Component,
  PropTypes,
} from 'react'

if(process.env.APP_ENV === 'client')
  require('./price-adjuster.scss')

class PriceAdjuster extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let {handlePriceAdjust, price} = this.props
    const amounts = [
      10000,
      5000,
      2500,
      1000,
      500,
      250,
    ]
    return (
      <div className="price-adjuster">
        {
          amounts.map(amt => [
            <button
              onClick={() => {
                  handlePriceAdjust((price += amt))
              }}
              className="pa-inc">
              +{(amt / 100).toFixed(2)}
            </button>,
            <button
              onClick={() => {
                  if(price !== 0) {
                    handlePriceAdjust((price -= amt))
                  }
              }}
              className="pa-dec">
              -{(amt / 100).toFixed(2)}
            </button>,
            <br />,
          ])
        }
      </div>
    )
  }
}

PriceAdjuster.propTypes = {
  handlePriceAdjust: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
}
//PriceAdjuster.defaultProps = {}

export default PriceAdjuster
