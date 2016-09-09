import React, {
  Component,
  PropTypes,
} from 'react'

import {scrollToBottom} from '../../../domUtils'

class ChatList extends Component {

  chatItem({ role, createdAt, fullName, text }) {
    // if(!createdAt) return
    return (
      <li key={createdAt}>
        <strong>{fullName}{role === 'broadcaster' && ' (broadcaster)'}: </strong>
        {text}
      </li>
    )
  }

  render() {
    const {
      privateMessages,
      lobbyMessages,
      isLobby,
    } = this.props

    const messages = isLobby ? lobbyMessages : privateMessages
    const title = isLobby ? 'Public Chat' : 'Private Chat'

    return (
      <div>
        <strong>{title}</strong>
        <div
          ref={(node) => scrollToBottom(node)}
          className="bidder-chat__list">
          <ul>
            {messages.map(this.chatItem)}
          </ul>
        </div>
      </div>
    )
  }
}

ChatList.propTypes = {
  privateMessages: PropTypes.array,
  lobbyMessages: PropTypes.array,
  isLobby: PropTypes.bool,
}
// ChatList.defaultProps = {}

export default ChatList
