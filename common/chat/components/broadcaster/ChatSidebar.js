import React, {
  Component,
  PropTypes,
} from 'react'
import {Toggler} from '../../../theme/toggle'

import classnames from 'classnames'

class ChatSidebar extends Component {

  constructor(props, context) {
    super(props, context)

    this.renderItem = this.renderItem.bind(this)
  }


  renderItem(id) {
    const {
      usersById,
      handleSelectUser,
      selectedUserId,
    } = this.props
    const user = usersById[id]

    return (
      <li key={id}
          className={selectedUserId == id ? '-is-selected' : ''}
          onClick={handleSelectUser.bind(null, parseInt(id, 10))}>
        {user.fullName}
      </li>
    )
  }

  render() {
    const {
      handleToggleLobby,
      handleSelectLobby,
      isLobbySelected,
      messagesByChannelId,
      isLobbyOpen,
    } = this.props
    const privateMessageUserIds = Object.keys(messagesByChannelId)
    const lobbyItemCx = classnames({
      'lobby-item': true,
      '-is-selected': isLobbySelected,
      '-is-open': isLobbyOpen,
    })

    return (
      <div className="broadcaster-chat__sidebar">
        <ul>
          <li>
            <Toggler label="Lobby"
              onToggle={() => handleToggleLobby()}
              defaultToggled={isLobbyOpen} />
          </li>
          <li className={lobbyItemCx}
            onClick={() => {
              handleSelectLobby()
            }}>
            Lobby
          </li>
          {privateMessageUserIds.map(this.renderItem)}
        </ul>
      </div>
    )
  }
}

ChatSidebar.propTypes = {
  model: PropTypes.object,
  usersById: PropTypes.object,
  selectedUserId: PropTypes.number,
  handleSelectLobby: PropTypes.func,
  handleToggleLobby: PropTypes.func,
  handleSelectUser: PropTypes.func,
  isLobbySelected: PropTypes.bool,
  messagesByChannelId: PropTypes.object,
  isLobbyOpen: PropTypes.bool,
}
// ChatSidebar.defaultProps = {}

export default ChatSidebar
