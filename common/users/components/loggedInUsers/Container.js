import {connect} from 'react-redux'
import LoggedInUsers from './LoggedInUsers'
import {getLoggedInUsers, getModel} from '../../selectors'
import {setSelectedUserId} from '../../actions'
import * as chat from '../../../chat'

function mapStateToProps(state) {
  const model = getModel(state)
  const {selectedUserId} = model

  return {
    loggedInUsers: getLoggedInUsers(state),
    mutedUserIds: chat.selectors.getMutedUserIds(state),
    privateMessageUserIds: chat.selectors.getPrivateMessageUserIds(state),
    selectedUserId,
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSelectUser(userId) {
    dispatch(setSelectedUserId(userId))
  },
  handleToggleMute(userId) {
    dispatch(chat.actions.toggleMutedUserId(userId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInUsers)
