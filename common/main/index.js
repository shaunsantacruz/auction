import React from 'react'
import { Link } from 'react-router'

import { combineReducers } from 'redux'

import './app.scss'

import * as bidItem from '../bidItem'
import * as bidBoard from '../bidBoard'
import * as bidLog from '../bidLog'
import * as user from '../user'
import * as users from '../users'

export const reducer = combineReducers({
  [bidItem.name]: bidItem.reducer,
  [bidBoard.name]: bidBoard.reducer,
  [user.name]: user.reducer,
  [users.name]: users.reducer,
  [bidLog.name]: bidLog.reducer,
})

export const Root = ({ children }) => {
  return (
    <div>
      <h1>Auction</h1>
      <ul>
        <li><Link to="/bidder">Bidder</Link></li>
        <li><Link to="/broadcaster">Broadcaster</Link></li>
      </ul>
      <main className="app">
        { children }
      </main>
    </div>
  )
}

Root.propTypes = {
  children: React.PropTypes.element
}
