import React from 'react'
import {connect} from 'react-redux'
import BidItem from './BidItem'
import { getModel } from '../selectors'

const Component = (props) => {
  return (
    <BidItem {...props} />
  )
}

function mapStateToProps(state) {
  return {
    model: getModel(state)
  }
}

export default connect(mapStateToProps)(Component)
