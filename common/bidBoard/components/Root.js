import React from 'react'
import Container from './Container'

if(process.env.APP_ENV === 'client')
  require('./bid-board.scss')

export default class Root extends React.Component {
  render() {
    return (
      <div className="bid-board component-root">
        <Container />
      </div>
    )
  }
}
