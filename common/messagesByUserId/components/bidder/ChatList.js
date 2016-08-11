import React, {
  Component,
  PropTypes,
} from 'react'

class ChatList extends Component {

  chatItem({ authorRole, createdAt, authorName, text }) {
    // if(!createdAt) return
    return (
      <li key={createdAt}>
        <strong>{authorName}{authorRole === 'broadcaster' && ' (broadcaster)'}: </strong>
        {text}
      </li>
    )
  }

  render() {
    const {messages} = this.props
    return (
      <div>
        <strong>Chat</strong>
        <div
          ref={(node) => {
            node && (node.scrollTop = node.scrollHeight)
          }}
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
  messages: PropTypes.array,
}
// ChatList.defaultProps = {}

export default ChatList
