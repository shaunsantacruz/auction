import React, {
  Component,
  PropTypes,
} from 'react'
import Container from './Container'


export default class Root extends Component {

  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
  }

  render() {
    const {location: {pathname} } = this.props
    return (
      <div className="component-root">
        <h2>Bidder</h2>
        <Container pathname={pathname} />
      </div>
    )
  }
}

Root.propTypes = {
  location: PropTypes.object
}
