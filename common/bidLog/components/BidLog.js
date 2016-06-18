import React, {
  Component,
  PropTypes,
} from 'react'
import {formatMoney} from '../../utils'

class BidLog extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const {model} = this.props
    return (
      <div>
        {model.reverse().map(({fullName, buyerNumber, amount, createdAt}) => {
          return (
            <p key={createdAt}>
              <small>
                {`${fullName}: ${buyerNumber}: ${formatMoney(amount)}`}
              </small>
            </p>
          )
        }
        )}
      </div>
    )
  }
}

BidLog.propTypes = {
  model: PropTypes.array.isRequired
}
BidLog.defaultProps = {}

export default BidLog
