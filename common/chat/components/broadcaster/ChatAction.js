import React, {
  Component,
  PropTypes,
} from 'react'

class ChatAction extends Component {

  constructor(props) {
    super(props)

    this.input = null
  }

  componentDidUpdate(prevProps) {
    const {
      selectedUserId,
    } = this.props

    if(selectedUserId !== prevProps.selectedUserId) {
      this.input.focus()
    }
  }

  render() {
    const {
      handleSendMessage,
      selectedUserId,
      isLobbySelected,
      currentUser,
    } = this.props
    const channelId = selectedUserId !== 0 ? selectedUserId : 'lobby'

    return (
      <div className="broadcaster-chat__action mt-5">
        <input
          type="text"
          onKeyDown={(e) => {
            if(e.which === 13 || e.which === 9) {
              if(this.input.value.trim() !== '') {
                handleSendMessage(this.input.value.trim(), channelId, currentUser)
                this.input.value = ''
              }
            }
          }}
          ref={
            (node) => {
              this.input = node
            }
          }
          disabled={!isLobbySelected && !selectedUserId} />
        <button
          onClick={() => {
            if(this.input.value.trim() !== '') {
              handleSendMessage(this.input.value.trim(), channelId, currentUser)
              this.input.value = ''
            }
          }}
          disabled={!isLobbySelected && !selectedUserId}>
          Send
        </button>
      </div>
    )
  }
}

ChatAction.propTypes = {
  handleSendMessage: PropTypes.func,
  selectedUserId: PropTypes.number,
  currentUser: PropTypes.object,
  model: PropTypes.object,
  isLobbySelected: PropTypes.bool,
}
// ChatAction.defaultProps = {}

export default ChatAction
