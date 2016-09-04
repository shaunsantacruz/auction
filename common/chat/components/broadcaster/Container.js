import {connect} from 'react-redux'
import Chat from './Chat'
import { getSortedMessagesById, getModel } from '../../selectors'
import * as a from '../../actions'

// external deps
import * as users from '../../../users'

function mapStateToProps(state) {
  const model = getModel(state)
  const selectedUserId = users.selectors.getSelectedUserId(state)
  const selectedUser = selectedUserId ? users.selectors.getUserById(state, selectedUserId) : null
  const messages = getSortedMessagesById(state, selectedUserId)
  const loggedInUsersById = users.selectors.getUsersById(state)

  return {
    selectedUser,
    messages,
    model,
    loggedInUsersById,
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage(text) {
    dispatch(a.addMsgById(text, {remote: true}))
  },
  handleToggleLobby() {
    dispatch(a.toggleLobby())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
