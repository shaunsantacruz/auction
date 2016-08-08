import React, {
  Component,
  PropTypes,
} from 'react'

if(process.env.APP_ENV === 'client')
  require('./chat-list.scss')

class ChatList extends Component {
  render() {
    const {model, selectedUser} = this.props
    const {selectedUserId} = model
    const messages = selectedUserId ? model[selectedUserId] : []

    return (
      <div>
        <strong>
          {selectedUser ? `Chatting with ${selectedUser.fullName}` : 'Chat'}
        </strong>
        <div className="message-list">
          <ul>
            {messages.reverse().map(msg =>
              <li key={msg.createdAt}><strong>{msg.authorName}:</strong> {msg.text}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

ChatList.propTypes = {
  model: PropTypes.object,
  selectedUserId: PropTypes.string,
  selectedUser: PropTypes.object,
}
// ChatList.defaultProps = {}

export default ChatList
