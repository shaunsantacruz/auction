import React, {
  Component,
} from 'react'

import Container from './Container'

export default class Root extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        <h2>Bid Item Cattle Root for broadcaster</h2>
        <Container />
      </div>
    )
  }
}
