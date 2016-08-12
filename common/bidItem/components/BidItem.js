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
      <div className="col-xs-5">
        <div className="box">
          <PriceAdjusterRoot />
        </div>
      </div>
    )
  }

  render() {
    const {bidType, pathname} = this.props
    const isBroadcaster = /\/broadcaster/.test(pathname)
    const pathTo = isBroadcaster ? '/broadcaster' : '/bidder'
    // e.g. /broadcaster/cattle/Root.js || /bidder/land/Root.js
    const pathToBidTypeRootComponent = `.${pathTo}/${bidType}/Root.js`
    // TODO: fix webpack warning this line generates https://github.com/webpack/docs/wiki/context
    const TypeRootComponent = require(pathToBidTypeRootComponent).default

    return (
      <div className="row component-well">
        {isBroadcaster && this.renderPriceAdjuster()}
        <div className={isBroadcaster ? 'col-xs-7' : 'col-xs'}>
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
