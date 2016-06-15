import BidItem from './BidItem'
import {connect} from 'react-redux'
import { getType } from '../selectors'

export default connect(
  (state) => ({
    bidType: getType(state),
  })
)(BidItem)
