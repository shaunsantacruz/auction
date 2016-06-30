import React, {
  Component,
  PropTypes,
} from 'react'
//import ReactDOM from 'react-dom'
import {formatMoney, unformatMoney} from '../../../../utils'

if (typeof window !== 'undefined')
  require('./cattle.scss')

class BidItem extends Component {

  constructor(props, context) {
    super(props, context)
    //this.onInputChange.bind(this)
  }

  onInputChange(e) {
    const {
      handleInputKeyDown,
      handleChange,
      } = this.props
    const newState = this.getInputValsByModelKey()
    // Handles updating the controlled React component w/o emitting a remote action
    handleChange(newState)
    // Handles enter or tab which will emit a remote action
    if (e.which === 13 || e.which === 9) {
      handleInputKeyDown(newState)
    }
  }

  onSelectChange() {
    const {
      handleChange,
      } = this.props
    const newState = this.getInputValsByModelKey()
    handleChange(newState, {remote: true})
  }

  getInputValsByModelKey() {
    let newState = {}
    const {model} = this.props
    Object.keys(model).map((key) => {
      // price has it's own handler so skip it
      //if (key === 'price') return
      if (this.refs[key]) {
        newState[key] = this.refs[key].value
      }
    })

    return newState
  }

  render() {
    let input
    const {
      model,
      handlePriceChange,
      handlePriceInputKeyDown,
      } = this.props
    const {
      id,
      headCount,
      variant,
      weight,
      averageWeight,
      price,
      pricePer,
      } = model
    return (
      <div>
        <form action="#" className="cattle-bid-item">
          <input
            ref="id"
            value={id}
            onChange={this.onInputChange.bind(this)}
            onKeyDown={this.onInputChange.bind(this)}
            type="text"/><label> :Draft#</label>
          <input
            ref="headCount"
            onChange={this.onInputChange.bind(this)}
            onKeyDown={this.onInputChange.bind(this)}
            value={headCount}
            type="text"/><label> :Head#</label>
          <select
            ref="variant"
            value={variant}
            onChange={this.onSelectChange.bind(this)}>
            <option value=""></option>
            <option value="Heifer">Heifer</option>
            <option value="Cow">Cow</option>
          </select><label> :Sex</label>
          <input
            ref="weight"
            onChange={this.onInputChange.bind(this)}
            onKeyDown={this.onInputChange.bind(this)}
            value={weight}
            type="text"/><label> :Weight</label>
          <input
            ref="averageWeight"
            onChange={this.onInputChange.bind(this)}
            onKeyDown={this.onInputChange.bind(this)}
            value={averageWeight}
            type="text"/><label> :Avg/#</label>
          <input
            ref="pricePer"
            onChange={this.onInputChange.bind(this)}
            onKeyDown={this.onInputChange.bind(this)}
            value={pricePer}
            type="text"/><label> :$/Head</label>
          <input
            ref={node => input = node}
            type="text"
            onChange={() => {
              handlePriceChange(unformatMoney(input.value.trim()))
            }}
            onKeyDown={(e) => {
              if(e.which === 13 || e.which === 9) {
                handlePriceInputKeyDown(unformatMoney(input.value.trim()))
              }
            }}
            value={formatMoney(price, '$ ')}
          /><label> :Price</label>
        </form>
      </div>
    )
  }
}

BidItem.propTypes = {
  model: PropTypes.object.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  handlePriceInputKeyDown: PropTypes.func.isRequired,
  handleInputKeyDown: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default BidItem
