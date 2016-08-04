import React, {
  Component,
  // PropTypes,
} from 'react'

class MessagesByUserId extends Component {
  render() {
    const styles = {
      resize: 'none',
      height: 150,
    }
    return (
      <div>
        <textarea className="w100" value="foo" style={styles} />
      </div>
    )
  }
}

// MessagesByUserId.propTypes = {}
// MessagesByUserId.defaultProps = {}

export default MessagesByUserId
