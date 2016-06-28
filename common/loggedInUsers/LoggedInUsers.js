import React, {
  Component,
  PropTypes,
} from 'react'

class LoggedInUsers extends Component {
  render() {
    const {loggedInUsers} = this.props
    console.log(loggedInUsers)
    return (
      <div>
        {loggedInUsers.reverse().map((user) => {
          return (
            <p key={user.fullName}>
              <small>{user.fullName}</small>
            </p>
          )
        })}
      </div>
    )
  }
}

LoggedInUsers.propTypes = {
  loggedInUsers: PropTypes.array
}
LoggedInUsers.defaultProps = {}

export default LoggedInUsers
