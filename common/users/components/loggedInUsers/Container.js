import {connect} from 'react-redux'
import LoggedInUsers from './index'
import { getLoggedInUsers } from '../../selectors'


function mapStateToProps(state) {
  return {
    loggedInUsers: getLoggedInUsers(state),
  }
}

export default connect(
  mapStateToProps
  //{onPriceChange: setPrice}
)(LoggedInUsers)
