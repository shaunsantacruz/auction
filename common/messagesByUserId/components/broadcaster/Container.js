import {connect} from 'react-redux'
import Chat from './Chat'
import { getModel } from '../../selectors'
import * as a from '../../actions'

// external deps
import * as users from '../../../users'

function mapStateToProps(state) {
  const model = getModel(state)
  const selectedUserId = users.selectors.getSelectedUserId(state)
  const selectedUser = selectedUserId ? users.selectors.getUserById(state, selectedUserId) : null
  const messages = selectedUser && model[selectedUser.id] ? model[selectedUser.id] : []

  return {
    selectedUser,
    messages,
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage(text) {
    dispatch(a.addMsg(text, {remote: true}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
