import React, {
  Component,
  PropTypes,
} from 'react'

class ChatAction extends Component {
  render() {
    let input
    const {handleSendMessage} = this.props
    return (
      <div className="mt-5">
        <input
          type="text"
          ref={(node) => input = node}
          onKeyDown={(e) => {
            if(e.which === 13 || e.which === 9) {
              if(input.value.trim() !== '') {
                handleSendMessage(input.value.trim())
                input.value = ''
              }
            }
          }}
          className="w80" />
        <button
          onClick={() => {
            if(input.value.trim() !== '') {
              handleSendMessage(input.value.trim())
              input.value = ''
            }
          }}
          style={{width: '18%', float: 'right'}}>
          Send
        </button>
      </div>
    )
  }
}

ChatAction.propTypes = {
  handleSendMessage: PropTypes.func,
  isSelected: PropTypes.bool,
}
// ChatAction.defaultProps = {}

export default ChatAction
