import React, {
  Component,
  // PropTypes,
} from 'react'

import Container from './Container'

class Root extends Component {
  render() {
    return (
      <div className="mt-10 component-root">
        <Container />
      </div>
    )
  }
}

// Root.propTypes = {}
// Root.defaultProps = {}

export default Root
