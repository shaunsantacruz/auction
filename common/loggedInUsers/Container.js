import {connect} from 'react-redux'
import LoggedInUsers from './LoggedInUsers'
import * as users from '../users'
import * as messagesByUserId from '../messagesByUserId'


function mapStateToProps(state) {
  return {
    loggedInUsers: users.selectors.getLoggedInUsers(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick(userId) {
    dispatch(messagesByUserId.actions.setSelected(userId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInUsers)
