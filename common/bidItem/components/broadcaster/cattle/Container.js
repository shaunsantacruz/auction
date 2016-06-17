import {connect} from 'react-redux'
import Cattle from './Cattle'
//import { bindActionCreators } from 'redux'

import * as user from '../../../../user'

import {setPrice} from '../../../actions'
import { getModel } from '../../../selectors'
//import { handleBidAttempt } from '../../../actions'

function mapStateToProps(state) {
  return {
    model: getModel(state),
    userId: user.selectors.getId(state)
  }
}

export default connect(
  mapStateToProps,
  {
    handleInputChange: setPrice,
    handleInputKeyDown: (price) => setPrice(price, {remote: true}),
  }
)(Cattle)
