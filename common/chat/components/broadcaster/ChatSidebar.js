import React, {
  Component,
  PropTypes,
} from 'react'
import {Toggler} from '../../../theme/toggle'

class ChatSidebar extends Component {
  render() {
    const {messagesByUserId} = this.props.model
    const {loggedInUsersById, handleToggleLobby} = this.props
    const userIds = Object.keys(messagesByUserId)
    return (
      <div className="broadcaster-chat__sidebar">
        <ul>
          <li>
            <Toggler
              label="Lobby"
              onToggle={() => handleToggleLobby()}
            />
          </li>
          {userIds.map(id => {
            const user = loggedInUsersById[id]
            return <li key={id}>{user.fullName}</li>
          })}
        </ul>
      </div>
    )
  }
}

ChatSidebar.propTypes = {
  model: PropTypes.object,
  loggedInUsersById: PropTypes.object,
  handleToggleLobby: PropTypes.func,
}
// ChatSidebar.defaultProps = {}

export default ChatSidebar
