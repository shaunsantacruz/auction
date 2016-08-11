import React, {
  Component,
  PropTypes,
} from 'react'

class ChatList extends Component {

  chatItem({ authorRole, createdAt, authorName, text }) {
    return (
      <li key={createdAt}>
        <strong>{authorName}{authorRole === 'broadcaster' && ' (broadcaster)'}: </strong>
        {text}
      </li>
    )
  }

  render() {
    const {selectedUser, messages} = this.props

    return (
      <div>
        <strong>
          {selectedUser ? `Chatting with ${selectedUser.fullName}` : 'Chat'}
        </strong>
        <div
          ref={(node) => {
            node && (node.scrollTop = node.scrollHeight)
          }}
          className="broadcaster-chat__list">
          <ul>
            {messages.map(this.chatItem)}
          </ul>
        </div>
      </div>
    )
  }
}

ChatList.propTypes = {
  selectedUser: PropTypes.object,
  messages: PropTypes.array,
}
// ChatList.defaultProps = {}

export default ChatList
