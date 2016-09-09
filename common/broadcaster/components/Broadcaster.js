import React, {
  Component,
  PropTypes,
} from 'react'

import * as bidItem from '../../bidItem'
import * as bidBoard from '../../bidBoard'
import * as bidLog from '../../bidLog'
// eslist is throwing a false positive on users so ignore it for now
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "users" }]*/
import * as users from '../../users'
import * as chat from '../../chat'
import {Grid, Row, TwoThird, Third, Half, Whole} from '../../theme/grid'

export default class Broadcaster extends Component {

  render() {
    const {pathname} = this.props
    return (
      <Grid>
        <Row>
          <TwoThird>
            <Row>
              <Half>
                <bidItem.Root pathname={pathname} />
              </Half>
              <Half>
                <bidBoard.Root />
              </Half>
            </Row>
            <Row>
              <Whole>
                <chat.Root pathname={pathname} />
              </Whole>
            </Row>
          </TwoThird>
          <Third>
            <bidLog.Root />
            <users.components.LoggedInUsers />
          </Third>
        </Row>
      </Grid>
    )
  }
}

Broadcaster.propTypes = {
  userId: PropTypes.number.isRequired,
  pathname: PropTypes.string.isRequired,
}
