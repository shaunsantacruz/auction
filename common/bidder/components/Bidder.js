import React, {Component, PropTypes} from 'react'
import * as bidItem from '../../bidItem'
import * as chat from '../../chat'
import {Grid, Row, Fourth, ThreeFourth} from '../../theme/grid'

if (process.env.APP_ENV === 'client')
  var placeholder = require('../../../public/assets/img/test-1.jpg')

class Bidder extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {pathname} = this.props
    return (
      <Grid>
        <Row>
          <Fourth>
            <bidItem.Root pathname={pathname} />
          </Fourth>
          <ThreeFourth>
            <img src={placeholder} />
          </ThreeFourth>
        </Row>
        <Row>
          <ThreeFourth offset="3">
            <chat.Root />
          </ThreeFourth>
        </Row>
      </Grid>

    )
  }
}

Bidder.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Bidder
