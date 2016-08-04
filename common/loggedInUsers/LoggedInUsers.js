import React, {
  Component,
  PropTypes,
} from 'react'

class LoggedInUsers extends Component {
  render() {
    const {loggedInUsers} = this.props
    return (
      <div>
        {loggedInUsers.reverse().map((user) => {
          return (
            <p
              key={user.fullName}
              onClick={() => console.log('hi')}
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
  loggedInUsers: PropTypes.array
}
LoggedInUsers.defaultProps = {}

export default LoggedInUsers
