import React, {
  Component,
  PropTypes,
} from 'react'

import {scrollToBottom} from '../../../domUtils'
import {Chat, VolumeOff} from '../../../theme/icons'

if(process.env.APP_ENV === 'client')
  require('./logged-in-users.scss')

class LoggedInUsers extends Component {
  render() {
    const {
      loggedInUsers,
      handleSelectUser,
      handleToggleMute,
      mutedUsersById,
    } = this.props
    return (
      <div className="component-well">
        <p className="mt-0 mb-5"><strong>Logged in users</strong></p>
        <div className="logged-in-users__list" ref={(node) => scrollToBottom(node)}>
          {loggedInUsers.reverse().map((user) => {
            if (user.role === 'broadcaster') return

            return (
              <div className="logged-in-users__item" key={user.fullName}>
                <span className="logged-in-users__user">
                  {user.fullName}
                </span>
                <span className={`logged-in-users__action ${mutedUsersById.indexOf(user.id) ? '-is-muted' : ''}`}>
                  <Chat onClick={handleSelectUser.bind(null, user.id)} />
                  <VolumeOff
                    onClick={handleToggleMute.bind(null, user.id)}
                  />
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

LoggedInUsers.propTypes = {
  loggedInUsers: PropTypes.array,
  mutedUsersById: PropTypes.array,
  handleSelectUser: PropTypes.func,
  handleToggleMute: PropTypes.func,
}
LoggedInUsers.defaultProps = {}

export default LoggedInUsers
