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
      loggedInUsersById,
      handleSelectUser,
      selectedUserId,
    } = this.props

    const user = loggedInUsersById[id]

    return (
      <li key={id}
          className={selectedUserId == id ? '-is-selected' : ''}
          onClick={handleSelectUser.bind(null, id)}>
        {user.fullName}
      </li>
    )
  }

  render() {
    const {
      messagesByUserId,
      isLobbyOpen,
    } = this.props.model
    const {
      handleToggleLobby,
      handleSelectLobby,
      isLobbySelected,
    } = this.props
    const privateMessageUserIds = Object.keys(messagesByUserId)
    const lobbyItemCx = classnames({
      'lobby-item': true,
      '-is-selected': isLobbySelected,
      '-is-open': isLobbyOpen
    })

    return (
      <div className="broadcaster-chat__sidebar">
        <ul>
          <li>
            <Toggler label="Lobby" onToggle={() => handleToggleLobby()} />
          </li>
          <li className={lobbyItemCx}
            onClick={() => {
              if(!isLobbyOpen) {
                return
              }
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
  loggedInUsersById: PropTypes.object,
  selectedUserId: PropTypes.number,
  handleSelectLobby: PropTypes.func,
  handleToggleLobby: PropTypes.func,
  handleSelectUser: PropTypes.func,
  isLobbySelected: PropTypes.bool,
}
// ChatSidebar.defaultProps = {}

export default ChatSidebar
