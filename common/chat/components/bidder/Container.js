import {connect} from 'react-redux'
import Chat from './Chat'
import { getMessagesById } from '../../selectors'
import * as a from '../../actions'

// external deps
import * as user from '../../../user'

function mapStateToProps(state) {
  const userId = user.selectors.getId(state)
  const messages = getMessagesById(state, userId)

  return {
    messages
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage(text) {
    dispatch(a.addMsgById(text, {remote: true}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
