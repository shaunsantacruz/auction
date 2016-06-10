import {connect} from 'react-redux'
import BidItem from './BidItem'
//import { bindActionCreators } from 'redux'

import * as user from '../../user'

import { getModel } from '../selectors'
import { handleBidAttempt } from '../actions'

function mapStateToProps(state) {
  return {
    model: getModel(state),
    userId: user.selectors.getId(state)
  }
}

//function mapDispatchToProps(dispatch) {
//  return {
//    handleBidAttempt: bindActionCreators(handleBidAttempt, dispatch)
//  }
//}

export default connect(
  mapStateToProps,
  {onClickHandler: handleBidAttempt }
)(BidItem)
