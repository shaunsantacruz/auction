import React from 'react'
import Container from './Container'

import * as bidItem from '../../bidItem'
import * as bidBoard from '../../bidBoard'

export default class Root extends React.Component {

  foo() {
    console.log('foo')
  }

  render() {
    return (
      <div>
        <h2>Broadcaster Root</h2>
        <Container />
        <bidItem.Root />
        <bidBoard.Root />
      </div>
    )
  }
}
