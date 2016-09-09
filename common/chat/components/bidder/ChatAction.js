import React, {
  Component,
  PropTypes,
} from 'react'

class ChatAction extends Component {
  render() {
    let input
    const {
      handleSendMessage,
      currentUser,
      isLobby,
      isUserMuted,
    } = this.props

    const channelId = !isLobby ? currentUser.id : 'lobby'

    return (
      <div className="bidder-chat__action mt-5">
        <input
          type="text"
          ref={(node) => input = node}
          onKeyDown={(e) => {
            if(e.which === 13 || e.which === 9) {
              if(input.value.trim() !== '') {
                handleSendMessage(input.value.trim(), channelId, currentUser)
                input.value = ''
              }
            }
          }}
          className="w80"
          disabled={isLobby && isUserMuted} />
        <button
          onClick={() => {
            if(input.value.trim() !== '') {
              handleSendMessage(input.value.trim(), channelId, currentUser)
              input.value = ''
            }
          }}
          style={{width: '18%', float: 'right'}}
          disabled={isLobby && isUserMuted} >
          Send
        </button>
      </div>
    )
  }
}

ChatAction.propTypes = {
  handleSendMessage: PropTypes.func,
  isSelected: PropTypes.bool,
  isLobby: PropTypes.bool,
  isLobbyOpen: PropTypes.bool,
  isUserMuted: PropTypes.bool,
  currentUser: PropTypes.object,
}
// ChatAction.defaultProps = {}

export default ChatAction
