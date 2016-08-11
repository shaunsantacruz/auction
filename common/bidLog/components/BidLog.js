import React, {
  Component,
  PropTypes,
} from 'react'
import {formatMoney} from '../../utils'

import {scrollToBottom} from '../../domUtils'

if(process.env.APP_ENV === 'client')
  require('./bid-log.scss')

class BidLog extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const {model, handleClick} = this.props
    return (
      <div>
        <p className="mt-0"><strong>Bid Log for Current Draft</strong> (most recent on top)</p>
        <div
          className="bid-log__list"
          ref={(node) => scrollToBottom(node)}>
          {model.reverse().map(({fullName, buyerNumber, amount, userId}, idx) => {
            return (
              <p
                key={idx}
                onClick={handleClick.bind(null, userId)}>
                <small>
                  {`${fullName}: ${buyerNumber}: ${formatMoney(amount)}`}
                </small>
              </p>
            )
          }
          )}
        </div>
      </div>
    )
  }
}

BidLog.propTypes = {
  model: PropTypes.array,
  handleClick: PropTypes.func,
}
BidLog.defaultProps = {}

export default BidLog
