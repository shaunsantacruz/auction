import React, {
  Component,
  PropTypes,
} from 'react'

class ChatAction extends Component {
  render() {
    let input
    const {handleSendMessage, selectedUser} = this.props
    return (
      <div className="mt-5">
        <input
          type="text"
          ref={(node) => input = node}
          className="w80"
          disabled={!selectedUser} />
        <button
          onClick={() => {
            if(input.value.trim() !== '') {
              handleSendMessage(input.value.trim())
              input.value = ''
            }
          }}
          style={{width: '18%', float: 'right'}}
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
