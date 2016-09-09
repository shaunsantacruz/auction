import {name} from './__init__'
import faker from 'faker'
import random from 'lodash/random'

//export const GET_USER = `${name}/GET_USER`
export const SET_STATE = `${name}/SET_STATE`

export const setState = (user) => ({
  type: SET_STATE,
  payload: { user }
})

// async
function fetchUser(id, role) {
  return new Promise((resolve) => {
    // Mocked User
    const uid = random(0, 5000)
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const fullName = `${firstName} ${lastName}`
    const user = {
      id: uid,
      fullName,
      firstName,
      lastName,
      email: `${firstName}@email.com`,
      city: 'New York',
      state: 'NY',
      buyerNumber: `buyer#_${uid}`,
      role
    }
    // simulate network req
    setTimeout(() => {
      resolve(user)
    }, 500)
  })
}

export const getUser = (id, role) => (dispatch) => {
  fetchUser(id, role)
    .then((user) => {
      dispatch(setState(user))
    })
}
