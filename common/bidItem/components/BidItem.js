import React, {
  Component,
  PropTypes,
} from 'react'
import PriceAdjusterRoot from './broadcaster/priceAdjuster/Root'

class BidItem extends Component {

  constructor(props, context) {
    super(props, context)
  }

  renderPriceAdjuster() {
    return (
      <div className="col-xs">
        <div className="box">
          <PriceAdjusterRoot />
        </div>
      </div>
    )
  }

  render() {
    const {bidType, pathname} = this.props
    const isBroadcaster = /\/broadcaster/.test(pathname)
    const pathToBidTypeRootComponent = `.${pathname}/${bidType}/Root.js`
    const TypeRootComponent = require(pathToBidTypeRootComponent).default

    return (
      <div className="row">
        {isBroadcaster && this.renderPriceAdjuster()}
        <div className="col-xs">
          <div className="box">
            {/* Typeroot is the auction-type bidItem component. i.e. Cattle or Land etc. */}
            <TypeRootComponent />
          </div>
        </div>
      </div>
    )
  }
}

BidItem.propTypes = {
  bidType: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default BidItem
