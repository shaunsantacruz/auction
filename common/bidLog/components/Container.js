import BidLog from './BidLog'
import {connect} from 'react-redux'
import {getModel} from '../selectors'

import * as users from '../../users'

const mapDispatchToProps = (dispatch) => ({
  handleClick(userId) {
    dispatch(users.actions.setSelectedUserId(userId))
  }
})

export default connect(
  (state) => ({
    model: getModel(state)
  }),
  mapDispatchToProps
)(BidLog)
