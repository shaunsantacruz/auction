import BidLog from './BidLog'
import {connect} from 'react-redux'
import {getModel} from '../selectors'

export default connect(
  (state) => ({
    model: getModel(state)
  })
)(BidLog)
