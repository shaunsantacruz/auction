import {connect} from 'react-redux'
import Chat from './Chat'
import { getModel } from '../../selectors'

function mapStateToProps(state) {
  return {
    model: getModel(state),
  }
}

export default connect(
  mapStateToProps
)(Chat)
