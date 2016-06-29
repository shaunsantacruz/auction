import React, {
  Component,
  PropTypes,
} from 'react'

import Container from './Container'

export default class Root extends Component {

  render() {
    const {location: {pathname} } = this.props
    return (
      <div>
        <h2>Broadcaster</h2>
        <Container pathname={pathname} />
      </div>
    )
  }
}

Root.propTypes = {
  location: PropTypes.object.isRequired
}
