import React, {
  Component,
  PropTypes,
} from 'react'

import ChatList from './ChatList'
import ChatAction from './ChatAction'

if(process.env.APP_ENV === 'client')
  require('./chat.scss')

class Chat extends Component {
  render() {
    const {messages} = this.props
    const style = messages && messages.length > 0 ? {display: 'block'} : {display: 'none'}
    return (
      <div
        className="bidder-chat component-well"
        style={style}>
        <ChatList {...this.props} />
        <ChatAction {...this.props} />
      </div>
    )
  }
}

Chat.propTypes = {
  messages: PropTypes.array,
}

export default Chat
