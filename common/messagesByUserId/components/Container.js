import {connect} from 'react-redux'
import messagesByUserId from './MessagesByUserId'
import { getModel } from '../selectors'

function mapStateToProps(state) {
  return {
    model: getModel(state),
  }
}

export default connect(
  mapStateToProps
)(messagesByUserId)
