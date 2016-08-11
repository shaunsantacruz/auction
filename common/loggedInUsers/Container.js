import {connect} from 'react-redux'
import LoggedInUsers from './LoggedInUsers'
import * as users from '../users'

function mapStateToProps(state) {
  return {
    loggedInUsers: users.selectors.getLoggedInUsers(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick(userId) {
    dispatch(users.actions.setSelectedUserId(userId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInUsers)
