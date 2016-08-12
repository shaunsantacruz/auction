import {connect} from 'react-redux'
import LoggedInUsers from './LoggedInUsers'
import {getLoggedInUsers} from '../../selectors'
import {setSelectedUserId} from '../../actions'

function mapStateToProps(state) {
  return {
    loggedInUsers: getLoggedInUsers(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick(userId) {
    dispatch(setSelectedUserId(userId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInUsers)
