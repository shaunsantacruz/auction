import React from 'react'
import Container from './Container'

export default class Root extends React.Component {

  constructor(props) {
    super(props)
    
    //console.log(props.location.pathname);
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
