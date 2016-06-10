import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Bidder from './Bidder'
import * as user from '../../user'
import handleSocketEvents from '../socket-events'

class BidderContainer extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(user.actions.getUser(5))
  }

  componentWillReceiveProps(nextProps) {
    const {userId} = nextProps

    if(userId) {
      const {store} = this.context
      const {socket, namespace} = this.context
      handleSocketEvents(socket, namespace, store)
    }
  }


  render() {
    const {userId} = this.props
    return (
      <div>
        {!userId ? <h2>loading...</h2> : <Bidder {...this.props} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: user.selectors.getId(state)
  }
}

BidderContainer.contextTypes = {
  store: PropTypes.object,
  socket: PropTypes.object,
  namespace: PropTypes.object,
}
BidderContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userId: PropTypes.string
}

export default connect(
  mapStateToProps
)(BidderContainer)
