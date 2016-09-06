import {connect} from 'react-redux'
import Chat from './Chat'
import { getMessagesById, getModel } from '../../selectors'
import * as a from '../../actions'

// external deps
import * as users from '../../../users'

function mapStateToProps(state) {
  const model = getModel(state)
  const selectedUserId = users.selectors.getSelectedUserId(state)
  const selectedUser = selectedUserId ? users.selectors.getUserById(state, selectedUserId) : null
  const isLobbySelected = selectedUserId == 0 && model.isLobbyOpen
  const messages = getMessagesById(state, selectedUserId)
  const loggedInUsersById = users.selectors.getUsersById(state)

  return {
    selectedUser,
    selectedUserId,
    messages,
    model,
    loggedInUsersById,
    isLobbySelected,
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage(text, isLobbySelected) {
    if(isLobbySelected) {
      dispatch(a.add(text, {remote: true}))
    }else {
      dispatch(a.addMsgById(text, {remote: true}))
    }
  },
  handleToggleLobby() {
    dispatch(a.toggleLobby())
  },
  handleSelectUser(userId) {
    dispatch(users.actions.setSelectedUserId(userId))
  },
  handleSelectLobby() {
    dispatch(users.actions.setSelectedUserId(0))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
