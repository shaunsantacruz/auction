import React, {
  Component,
  // PropTypes,
} from 'react'

import ChatList from './ChatList'
import ChatAction from './ChatAction'

if(process.env.APP_ENV === 'client')
  require('./chat.scss')

class Chat extends Component {
  render() {
    return (
      <div className="bidder-chat">
        <ChatList {...this.props} />
        <ChatAction {...this.props} />
      </div>
    )
  }
}

// ChatsByUserId.propTypes = {}
// ChatsByUserId.defaultProps = {}

export default Chat
