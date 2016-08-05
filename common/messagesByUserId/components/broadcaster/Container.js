import {connect} from 'react-redux'
import Chat from './Chat'
import { getModel } from '../../selectors'
import * as a from '../../actions'

function mapStateToProps(state) {
  return {
    model: getModel(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage(text) {
    dispatch(a.addMsg(text))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
