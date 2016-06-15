import React, {
  Component,
  PropTypes,
} from 'react'

import {connect} from 'react-redux'

import { getType } from '../selectors'

class Container extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {bidType, pathname} = this.props
    const pathToRootComponentType = `.${pathname}/${bidType}/Root.js`
    const Root = require(pathToRootComponentType).default

    return <Root />
  }
}

Container.propTypes = {
  bidType: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default connect(
  (state) => ({
    bidType: getType(state),
  })
)(Container)
