import React, {
  Component,
  PropTypes,
} from 'react'

class LoggedInUsers extends Component {
  render() {
    const {loggedInUsers, handleClick} = this.props
    return (
      <div>
        {loggedInUsers.reverse().map((user) => {
          return (
            <p
              key={user.fullName}
              onClick={handleClick.bind(null, user.id)}
              style={{cursor: 'pointer'}}>
              <small>{user.fullName}</small>
            </p>
          )
        })}
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
