import React, {
  Component,
  PropTypes,
} from 'react'

import ChatList from './ChatList'
import ChatAction from './ChatAction'
import {Grid, Row, Cell} from '../../../theme/grid'

if(process.env.APP_ENV === 'client')
  require('./chat.scss')

class Chat extends Component {
  render() {
    const {
      privateMessages,
      isLobbyOpen,
    } = this.props
    const lobbyStyle = isLobbyOpen ? {display: 'block'} : {display: 'none'}
    const privateStyle = privateMessages && privateMessages.length > 0 ? {display: 'block'} : {display: 'none'}
    return (
      <Grid className="bidder-chat">
        <Row>
          <Cell className="bidder-chat__lobby" style={lobbyStyle}>
            <ChatList {...this.props} isLobby />
            <ChatAction {...this.props} isLobby />
          </Cell>
          <Cell className="bidder-chat__private" style={privateStyle}>
            <ChatList {...this.props} />
            <ChatAction {...this.props} />
          </Cell>
        </Row>
      </Grid>
    )
  }
}

Chat.propTypes = {
  privateMessages: PropTypes.array,
  isLobbyOpen: PropTypes.bool,
}

export default Chat
