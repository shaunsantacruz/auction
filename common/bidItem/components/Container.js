import {connect} from 'react-redux'
import BidItem from './BidItem'
import { getModel } from '../selectors'
import { setBidPrice } from '../actions'

function mapStateToProps(state) {
  return {
    model: getModel(state)
  }
}

export default connect(
  mapStateToProps,
  {onBidPriceChange: setBidPrice}
)(BidItem)
