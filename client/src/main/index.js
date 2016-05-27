import React from 'react'
import { Link } from 'react-router'

import { combineReducers } from 'redux'

import * as bidItem from '../../../common/bidItem'


export const reducer = combineReducers({
  [bidItem.name]: bidItem.reducer
})

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

