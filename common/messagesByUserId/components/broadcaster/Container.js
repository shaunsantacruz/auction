import {connect} from 'react-redux'
import Chat from './Chat'
import { getModel } from '../../selectors'
import * as a from '../../actions'

// external deps
import * as users from '../../../users'

function mapStateToProps(state) {
  const model = getModel(state)
  const {selectedUserId} = model

  return {
    model,
    isSelected: selectedUserId !== undefined,
    selectedUser: selectedUserId ? users.selectors.getUserById(state, selectedUserId) : null
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage(text) {
    dispatch(a.addMsg(text))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
