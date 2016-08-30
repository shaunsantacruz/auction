import React, {
  Component,
  PropTypes,
} from 'react'

// if(process.env.APP_ENV === 'client')
//   require('./chat-root.scss')

class Root extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {pathname} = this.props
    const isBroadcaster = /\/broadcaster/.test(pathname)
    const pathTo = isBroadcaster ? '/broadcaster' : '/bidder'
    const pathToComponent = `.${pathTo}/Root.js`
    const Root = require(pathToComponent).default
    return (
      <div className="chat">
        <Root />
      </div>
    )
  }
}

Root.propTypes = {
  pathname: PropTypes.string.isRequired,
}
// Root.defaultProps = {}

export default Root
