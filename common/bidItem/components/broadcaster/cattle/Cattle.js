import React, {
  Component,
  PropTypes,
} from 'react'
//import ReactDOM from 'react-dom'
import {unformatMoney} from '../../../../utils'
import CurrencyInput from 'react-currency-input'

if (process.env.APP_ENV === 'client')
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
      if (this.refs[key]) {
        newState[key] = this.refs[key].value
      }
    })

    return newState
  }

  render() {
    // let input
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
          <div className="form-group">
            <input
              ref="id"
              value={id}
              onChange={this.onInputChange.bind(this)}
              onKeyDown={this.onInputChange.bind(this)}
              type="number"/><label> :Draft #</label>
          </div>
          <div className="form-group">
            <input
              ref="headCount"
              onChange={this.onInputChange.bind(this)}
              onKeyDown={this.onInputChange.bind(this)}
              value={headCount}
              type="number"/><label> :# Head</label>
          </div>
          <div className="form-group">
            <select
              ref="variant"
              value={variant}
              onChange={this.onSelectChange.bind(this)}>
              <option value="" />
              <option value="Heifer">Heifer</option>
              <option value="Cow">Cow</option>
            </select><label> :Sex</label>
          </div>
          <div className="form-group">
            <input
              ref="weight"
              onChange={this.onInputChange.bind(this)}
              onKeyDown={this.onInputChange.bind(this)}
              value={weight}
              type="number"/><label> :Weight</label>
          </div>
          <div className="form-group">
            <input
              ref="averageWeight"
              onChange={this.onInputChange.bind(this)}
              onKeyDown={this.onInputChange.bind(this)}
              value={averageWeight}
              type="number"/><label> :Avg/#</label>
          </div>
          <div className="form-group">
            <input
              ref="pricePer"
              onChange={this.onInputChange.bind(this)}
              onKeyDown={this.onInputChange.bind(this)}
              value={pricePer}
              type="number"/><label> :$/Head</label>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">$</span>
              <CurrencyInput
                ref="input"
                onChange={(newValue) => {
                  handlePriceChange(unformatMoney(newValue))
                }}
                onKeyDown={(e) => {
                  if(e.which === 13 || e.which === 9) {
                    handlePriceInputKeyDown(unformatMoney(this.refs.input.getMaskedValue()))
                  }
                }}
                value={price.toString()}
              /><label> :Price</label>
            </div>
          </div>
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
