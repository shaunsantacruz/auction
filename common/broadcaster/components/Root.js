import React from 'react'
//import Container from './Container'

import * as bidItem from '../../bidItem'
import * as bidBoard from '../../bidBoard'

export default class Root extends React.Component {

  render() {
    return (
      <div className="row">
        <h2 style={{width: '100%'}}>Broadcaster Root</h2>
        <div className="col-xs">
          <div className="box">
            <bidItem.Root />
          </div>
        </div>
        <div className="col-xs">
          <div className="box">
            <bidBoard.Root />
          </div>
        </div>
      </div>
    )
  }
}
