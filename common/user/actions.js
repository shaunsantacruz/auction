import {name} from './__init__'
import uuid from 'uuid'

export const GET_USER = `${name}/GET_USER`

function fetchUser() {
  return new Promise((resolve, reject) => {
    // Mocked User
    const uid = uuid.v1().substr(0, 5)
    const user = {
      id: uid,
      fullName: `User ${uid}`,
      firstName: `User ${uid}`,
      lastName: 'Number',
      email: `User_${uid}@email.com`,
      city: 'New York',
      state: 'NY',
      buyerNumber: `foo_${uid}`,
      role: 'bidder'
    }
    // simulate network req
    setTimeout(() => {
      resolve(user)
    }, 2500)
  })
}

export const getUser = (id) => (dispatch) => {
  fetchUser(id).then((user) => {console.log(user)})
}
