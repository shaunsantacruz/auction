import {connect} from 'react-redux'
import Chat from './Chat'
import { getModel } from '../../selectors'
import * as a from '../../actions'

// external deps
import * as user from '../../../user'

function mapStateToProps(state) {
  const model = getModel(state)
  const userId = user.selectors.getId(state)
  const messages = model[userId] ? model[userId] : []

  return {
    messages
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage(text) {
    dispatch(a.addMsg(text, {remote: true}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
