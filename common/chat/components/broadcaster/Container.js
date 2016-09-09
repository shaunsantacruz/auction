import {connect} from 'react-redux'
import Chat from './Chat'
import { getMessagesWithoutMuted, getMessagesById, getModel } from '../../selectors'
import * as a from '../../actions'

// external deps
import * as users from '../../../users'
import * as user from '../../../user'

function mapStateToProps(state) {
  const model = getModel(state)
  const {
    messagesByChannelId,
    isLobbyOpen,
  } = model
  const selectedUserId = users.selectors.getSelectedUserId(state)
  const selectedUser = selectedUserId ? users.selectors.getUserById(state, selectedUserId) : null
  const isLobbySelected = selectedUserId == 0 && model.isLobbyOpen
  const currentUser = user.selectors.getModel(state)
  const messages = selectedUserId == 0
    ? getMessagesWithoutMuted(state)
    : getMessagesById(state, selectedUserId)
  const usersById = users.selectors.getUsersById(state)

  return {
    currentUser,
    selectedUser,
    selectedUserId,
    messages,
    usersById,
    isLobbySelected,
    messagesByChannelId,
    isLobbyOpen,
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage(text, channelId, currentUser) {
    dispatch(a.addMsg(text, channelId, currentUser, {remote: true}))
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
