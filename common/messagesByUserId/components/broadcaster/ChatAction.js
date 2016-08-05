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
          className="w80"/>
        <button
          onClick={() => {
            handleSendMessage(input.value.trim())
            input.value = ''
          }}
          style={{width: '18%', float: 'right'}}>
          Send
        </button>
      </div>
    )
  }
}

ChatAction.propTypes = {
  handleSendMessage: PropTypes.func
}
// ChatAction.defaultProps = {}

export default ChatAction
