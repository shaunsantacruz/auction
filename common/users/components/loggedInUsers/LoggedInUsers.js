import React, {
  Component,
  PropTypes,
} from 'react'

import classnames from 'classnames'
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
      mutedUserIds,
      privateMessageUserIds,
      selectedUserId,
    } = this.props

    return (
      <div className="component-well">
        <p className="mt-0 mb-5"><strong>Logged in users</strong></p>
        <div className="logged-in-users__list" ref={(node) => scrollToBottom(node)}>
          {loggedInUsers.filter((user) => user.role !== 'broadcaster').reverse().map((user) => {
            const cx = classnames({
              '-is-muted': mutedUserIds.indexOf(user.id) > -1,
              '-is-chatting': privateMessageUserIds.indexOf(user.id) > -1 || selectedUserId == user.id,
            })

            return (
              <div className="logged-in-users__item" key={user.fullName}>
                <span className="logged-in-users__user">
                  {user.fullName}
                </span>
                <span className={`logged-in-users__action ${cx}`}>
                  <Chat
                    onClick={handleSelectUser.bind(null, user.id)} />
                  <VolumeOff
                    onClick={handleToggleMute.bind(null, user.id)} />
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
  mutedUserIds: PropTypes.array,
  selectedUserId: PropTypes.string,
  privateMessageUserIds: PropTypes.array,
  handleSelectUser: PropTypes.func,
  handleToggleMute: PropTypes.func,
}
LoggedInUsers.defaultProps = {}

export default LoggedInUsers
