import React, {
  Component,
  PropTypes,
} from 'react'
import {formatMoney, unformatMoney} from '../../../../utils'

class BidItem extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    let input
    const {
      model: { price },
      handleInputChange,
      handleInputKeyDown,
      } = this.props
    return (
      <div>
        <form action="#">
          <input
            ref={node => input = node}
            type="text"
            onChange={() => {
              handleInputChange(unformatMoney(input.value.trim()))
            }}
            onKeyDown={(e) => {
              if(e.which === 13 || e.which === 9) {
                e.preventDefault()
                handleInputKeyDown(unformatMoney(input.value.trim()))
              }
            }}
            value={formatMoney(price, '$ ')}
          />
        </form>
      </div>
    )
  }
}

BidItem.propTypes = {
  model: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputKeyDown: PropTypes.func.isRequired,
}

export default BidItem
