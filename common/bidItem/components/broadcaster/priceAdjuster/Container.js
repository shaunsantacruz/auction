//import React, {
//  //Component,
//  //PropTypes,
//} from 'react'
import {connect} from 'react-redux'
import PriceAdjuster from './PriceAdjuster'
import {adjustPrice} from '../../../actions'

export default connect(
  null,
  {handlePriceAdjust: adjustPrice}
)(PriceAdjuster)
