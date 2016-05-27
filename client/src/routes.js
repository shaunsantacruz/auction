import React from 'react'
import { Route } from 'react-router'
import * as main from './main'
import * as bidder from './main/bidder'
import * as broadcaster from './main/broadcaster'

export default (
  <Route path="/" component={main.Root}>
    <Route path="bidder" component={bidder.Root}/>
    <Route path="broadcaster" component={broadcaster.Root}/>
  </Route>
)
