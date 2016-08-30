import React, {
  Component,
  PropTypes,
} from 'react'

class ChatAction extends Component {
  render() {
    let input
    const {handleSendMessage, selectedUser} = this.props
    return (
      <div className="broadcaster-chat__action mt-5">
        <input
          type="text"
          onKeyDown={(e) => {
            if(e.which === 13 || e.which === 9) {
              if(input.value.trim() !== '') {
                handleSendMessage(input.value.trim())
                input.value = ''
              }
            }
          }}
          ref={(node) => input = node}
          disabled={!selectedUser} />
        <button
          onClick={() => {
            if(input.value.trim() !== '') {
              handleSendMessage(input.value.trim())
              input.value = ''
            }
          }}
          disabled={!selectedUser}>
          Send
        </button>
      </div>
    )
  }
}

ChatAction.propTypes = {
  handleSendMessage: PropTypes.func,
  selectedUser: PropTypes.object,
}
// ChatAction.defaultProps = {}

export default ChatAction
