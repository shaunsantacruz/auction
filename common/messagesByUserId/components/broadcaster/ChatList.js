import React, {
  Component,
  // PropTypes,
} from 'react'

if(process.env.APP_ENV === 'client')
  require('./chat-list.scss')

class ChatList extends Component {
  render() {
    return (
      <div>
        <strong>Chat</strong>
        <div className="message-list">
          <ul>
            <li><strong>Broadcaster: </strong>Hey</li>
            <li><strong>User: </strong>Ho</li>
          </ul>
        </div>
      </div>
    )
  }
}

// ChatList.propTypes = {}
// ChatList.defaultProps = {}

export default ChatList
