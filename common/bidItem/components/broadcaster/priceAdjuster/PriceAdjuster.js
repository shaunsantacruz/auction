import React, {
  Component,
  PropTypes,
} from 'react'

class PriceAdjuster extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {handlePriceAdjust} = this.props
    const amounts = [
      10000,
      5000,
      2500,
      1000,
      500,
      250,
    ]
    return (
      <div>
        {
          amounts.map(amt => [
            <button onClick={handlePriceAdjust.bind(null, amt)}>
              {(amt / 100).toFixed(2)}
            </button>,
            <button onClick={handlePriceAdjust.bind(null, -amt)}>
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
  handlePriceAdjust: PropTypes.func.isRequired
}
//PriceAdjuster.defaultProps = {}

export default PriceAdjuster
