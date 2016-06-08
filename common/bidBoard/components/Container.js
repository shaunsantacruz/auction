import {connect} from 'react-redux'
import BidBoard from './BidBoard'
import { getModel } from '../selectors'
//import { setPrice } from '../actions'

function mapStateToProps(state) {
  return {
    model: getModel(state),
  }
}

export default connect(
  mapStateToProps
  //{onPriceChange: setPrice}
)(BidBoard)
