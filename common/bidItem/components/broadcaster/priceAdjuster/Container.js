//import React, {
//  //Component,
//  //PropTypes,
//} from 'react'
import {connect} from 'react-redux'
import PriceAdjuster from './PriceAdjuster'
import {getPrice} from '../../../selectors'
import {setPrice} from '../../../actions'

export default connect(
  (state) => ({
    price: getPrice(state)
  }),
  {
    handlePriceAdjust: (price) => setPrice(price, {remote: true}),
  }
)(PriceAdjuster)
