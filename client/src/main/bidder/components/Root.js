import React from 'react'
import Container from './Container'

export default class Root extends React.Component {

  foo() {
    console.log('foo')
  }

  render() {
    return (
      <div>
        <h2>Bidder Root</h2>
        <Container />
      </div>
    )
  }
}
