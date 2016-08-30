import React from 'react'
import { Link } from 'react-router'

import { combineReducers } from 'redux'

if (process.env.APP_ENV === 'client')
  require('./main.scss')

import * as bidItem from '../bidItem'
import * as bidBoard from '../bidBoard'
import * as bidLog from '../bidLog'
import * as user from '../user'
import * as users from '../users'
import * as chat from '../chat'

export const reducer = combineReducers({
  [bidItem.name]: bidItem.reducer,
  [bidBoard.name]: bidBoard.reducer,
  [user.name]: user.reducer,
  [users.name]: users.reducer,
  [bidLog.name]: bidLog.reducer,
  [chat.name]: chat.reducer,
})

export const Root = ({ children }) => {
  return (
    <div>
      <h1>Live Auction for Sidney Livestock Market Center</h1>
      <ul>
        <li><Link to="/bidder">Bidder</Link></li>
        <li><Link to="/broadcaster">Broadcaster</Link></li>
      </ul>
      <main className="main">
        { children }
      </main>
    </div>
  )
}

Root.propTypes = {
  children: React.PropTypes.element
}
