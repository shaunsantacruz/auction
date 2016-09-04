import React, {
  Component,
  PropTypes,
} from 'react'

import ChatList from './ChatList'
import ChatAction from './ChatAction'
import ChatSidebar from './ChatSidebar'

import {Grid, Row, Third, TwoThird, Cell} from '../../../theme/grid'

if (process.env.APP_ENV === 'client') {
  require('./chat.scss')
}

class Chat extends Component {
  render() {
    const {selectedUser} = this.props

    return (
      <Grid className="broadcaster-chat component-well">
        <Row>
          <Third>
            <ChatSidebar {...this.props} />
          </Third>
          <TwoThird>
            <Row middle>
              <Cell>
                <strong className="d-ib fl-l">
                  {selectedUser ? `Chatting with ${selectedUser.fullName}` : 'Chat'}
                </strong>
              </Cell>
            </Row>
            <Row>
              <Cell>
                <ChatList {...this.props} />
              </Cell>
            </Row>
            <Row>
              <Cell>
                <ChatAction {...this.props} />
              </Cell>
            </Row>
          </TwoThird>
        </Row>
      </Grid>
    )
  }
}

Chat.propTypes = {
  selectedUser: PropTypes.object,
}
// ChatsByUserId.defaultProps = {}

export default Chat
