import React, {
  Component,
  // PropTypes,
} from 'react'

class ChatAction extends Component {
  render() {
    return (
      <div className="mt-5">
        <input
          type="text"
          className="w80"/>
        <button
          style={{width: '18%', float: 'right'}}>
          Send
        </button>
      </div>
    )
  }
}

// ChatAction.propTypes = {}
// ChatAction.defaultProps = {}

export default ChatAction
