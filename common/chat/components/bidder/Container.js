import {connect} from 'react-redux'
import Chat from './Chat'
import { getModel, getMessagesWithoutMuted, getMessagesById } from '../../selectors'
import * as a from '../../actions'

// external deps
import * as user from '../../../user'

function mapStateToProps(state) {
  const model = getModel(state)
  const {
    isLobbyOpen,
  } = model
  const currentUser = user.selectors.getModel(state)
  const privateMessages = getMessagesById(state, currentUser.id)
  const lobbyMessages = getMessagesWithoutMuted(state)
  const isUserMuted = user.selectors.isUserMuted(state)

  return {
    privateMessages,
    lobbyMessages,
    currentUser,
    isLobbyOpen,
    isUserMuted,
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage(text, channelId, currentUser) {
    dispatch(a.addMsg(text, channelId, currentUser, {remote: true}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
