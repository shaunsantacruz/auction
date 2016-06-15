import React, {
  Component,
  //PropTypes,
} from 'react'

import Container from './Container'

export default class Root extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        <Container {...this.props} />
      </div>
    )
  }
}

//Container.propTypes = {
//  pathname: PropTypes.string.isRequired
//}
