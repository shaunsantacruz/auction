import React from 'react'
import { Link } from 'react-router'

import { combineReducers } from 'redux'

import * as bidItem from '../../../common/bidItem'
import * as bidder from './bidder'
import * as app from '../../../common/app'

export const reducer = combineReducers({
  app: app.reducer,
  [bidItem.name]: bidItem.reducer
})

export function handleSocketEvents(socket, namespace, store) {
  if(`/${bidder.name}` === namespace.nsp) {
    bidder.handleSockets(socket, namespace, store)
  }
}

export const Root = ({ children }) => {
  return (
    <div>
      <h1>My App</h1>
      <ul>
        <li><Link to="/bidder">Bidder</Link></li>
        <li><Link to="/broadcaster">Broadcaster</Link></li>
      </ul>
      <main>
        { children }
      </main>
    </div>
  )
}

Root.propTypes = {
  children: React.PropTypes.element
}
