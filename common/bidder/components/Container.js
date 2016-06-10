import React from 'react'
import {connect} from 'react-redux'
import * as user from '../../user'

import * as bidItem from '../../bidItem'

export default class Bidder extends React.Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(user.actions.getUser(5))
  }

  render() {
    return (
      <bidItem.Root />
    )
  }
}

export default connect(
)(Bidder)
