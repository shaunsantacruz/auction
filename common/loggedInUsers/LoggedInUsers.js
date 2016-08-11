import React, {
  Component,
  PropTypes,
} from 'react'

import {scrollToBottom} from '../domUtils'

if(process.env.APP_ENV === 'client')
  require('./logged-in-users.scss')

class LoggedInUsers extends Component {
  render() {
    const {loggedInUsers, handleClick} = this.props
    return (
      <div>
        <p className="mt-0"><strong>Logged in users</strong></p>
        <div
          className="logged-in-users__list"
          ref={(node) => scrollToBottom(node)}>
          {loggedInUsers.reverse().map((user) => {
            if (user.role === 'broadcaster') return

            return (
              <p
                key={user.fullName}
                onClick={handleClick.bind(null, user.id)}>
                <small>{user.fullName}</small>
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

LoggedInUsers.propTypes = {
  loggedInUsers: PropTypes.array,
  handleClick: PropTypes.func,
}
LoggedInUsers.defaultProps = {}

export default LoggedInUsers
