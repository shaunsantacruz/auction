import {connect} from 'react-redux'
import LoggedInUsers from './LoggedInUsers'
import * as users from '../users'


function mapStateToProps(state) {
  return {
    loggedInUsers: users.selectors.getLoggedInUsers(state),
  }
}

export default connect(
  mapStateToProps
  //{onPriceChange: setPrice}
)(LoggedInUsers)
