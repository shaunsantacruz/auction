import React, {
  Component,
  // PropTypes,
} from 'react'

import ChatList from './ChatList'
import ChatAction from './ChatAction'

class Chat extends Component {
  render() {
    return (
      <div>
        <ChatList />
        <ChatAction {...this.props} />
      </div>
    )
  }
}

// ChatsByUserId.propTypes = {}
// ChatsByUserId.defaultProps = {}

export default Chat
