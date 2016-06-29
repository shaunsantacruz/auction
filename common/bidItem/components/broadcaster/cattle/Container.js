import {connect} from 'react-redux'
import Cattle from './Cattle'
//import { bindActionCreators } from 'redux'

import * as user from '../../../../user'

import {setPrice, mergeState} from '../../../actions'
import { getModel } from '../../../selectors'

function mapStateToProps(state) {
  return {
    model: getModel(state),
    userId: user.selectors.getId(state)
  }
}

export default connect(
  mapStateToProps,
  {
    handleInputKeyDown: (state) => mergeState(state, {remote: true}),
    handleChange: (state, remote) => mergeState(state, {remote}),
    handlePriceChange: setPrice,
    handlePriceInputKeyDown: (price) => setPrice(price, {remote: true}),
  }
)(Cattle)
