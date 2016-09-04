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
    const {selectedUser} = this.props
    if(selectedUser !== prevProps.selectedUser) {
      this.input.focus()
    }
  }

  render() {
    const {handleSendMessage, selectedUser} = this.props
    return (
      <div className="broadcaster-chat__action mt-5">
        <input
          type="text"
          onKeyDown={(e) => {
            if(e.which === 13 || e.which === 9) {
              if(this.input.value.trim() !== '') {
                handleSendMessage(this.input.value.trim())
                this.input.value = ''
              }
            }
          }}
          ref={
            (node) => {
              this.input = node
            }
          }
          disabled={!selectedUser} />
        <button
          onClick={() => {
            if(this.input.value.trim() !== '') {
              handleSendMessage(this.input.value.trim())
              this.input.value = ''
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
