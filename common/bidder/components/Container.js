import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Bidder from './Bidder'
import * as user from '../../user'

import handleSocketEvents from '../socket-events'

class Container extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(user.actions.getUser(5, 'bidder'))
  }

  componentWillReceiveProps(nextProps) {
    const {userId} = nextProps

    if(userId) {
      const {store} = this.context
      const {namespace} = this.context
      handleSocketEvents(namespace, store)
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

Container.contextTypes = {
  store: PropTypes.object,
  namespace: PropTypes.object,
}
Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userId: PropTypes.number
}

export default connect(
  (state) => ({userId: user.selectors.getId(state)})
)(Container)
