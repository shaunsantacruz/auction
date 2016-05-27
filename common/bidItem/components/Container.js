import React from 'react'
import {connect} from 'react-redux'
import BidItem from './BidItem'

const Component = (props) => {
  return (
    <BidItem {...props} />
  )
}

function mapStateToProps(state) {
  return {
    bid_price: state.bidItem.bid_price
  }
}

export default connect(mapStateToProps)(Component)
