import {connect} from 'react-redux'
import LoggedInUsers from './LoggedInUsers'
import {getLoggedInUsers} from '../../selectors'
import {setSelectedUserId} from '../../actions'
import * as chat from '../../../chat'

function mapStateToProps(state) {

  return {
    loggedInUsers: getLoggedInUsers(state),
    mutedUsersById: chat.selectors.getMutedUsersIds(state),
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
