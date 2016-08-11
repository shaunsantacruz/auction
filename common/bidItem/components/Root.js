import React, {
  Component,
  //PropTypes,
} from 'react'

import Container from './Container'

// if(process.env.APP_ENV === 'client')
//   require('./broadcaster-bid-item.scss')

export default class Root extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="broadcaster-bid-item component-root">
        <Container {...this.props} />
      </div>
    )
  }
}

//Container.propTypes = {
//  pathname: PropTypes.string.isRequired
//}
