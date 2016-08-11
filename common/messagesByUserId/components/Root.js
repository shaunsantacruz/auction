import React, {
  Component,
  PropTypes,
} from 'react'

class Root extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {pathname} = this.props
    const isBroadcaster = /\/broadcaster/.test(pathname)
    const pathTo = isBroadcaster ? '/broadcaster' : '/bidder'
    const pathToComponent = `.${pathTo}/Root.js`
    console.log(pathToComponent)
    const Root = require(pathToComponent).default
    return (
      <div>
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
