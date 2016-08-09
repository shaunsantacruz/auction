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
    const {model, userId} = this.props
    const messages = model[userId] ? model[userId] : []

    return (
      <div>
        <strong>Chat</strong>
        <div className="bidder-chat__list">
          <ul>
            {messages.reverse().map(this.chatItem)}
          </ul>
        </div>
      </div>
    )
  }
}

ChatList.propTypes = {
  model: PropTypes.object,
  userId: PropTypes.string,
}
// ChatList.defaultProps = {}

export default ChatList
