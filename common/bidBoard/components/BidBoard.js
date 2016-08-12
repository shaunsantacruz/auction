import React, {
  Component,
  PropTypes,
} from 'react'
import classnames from 'classnames'
import {formatMoney} from '../../utils'

if(process.env.APP_ENV === 'client')
  require('./bid-board.scss')

export default class BidBoard extends Component {
  constructor(props, context) {
    super(props, context)
    // animationEnd flag used to determine when this components animation has finished.
    // Default state is false since no animation has occoured during init
    // This components animation is triggered when it receives a new bid
    this.state = {animationEnd: false}
  }

  componentWillReceiveProps(nextProps) {
    // A new bid has arrived
    if(nextProps.model.price !== this.props.model.price) {
      this.classNames = classnames({
        '-has-bid': this.props.model.price > 0,
        '-flash': this.props.model.price > 0,
        'bid-board component-well': true,
      })
      // reset animationEnd flag since a new bid was received
      this.setState({animationEnd: false})
    }
  }

  render() {
    const { recentBidder: {fullName}, price } = this.props.model

    // If animation end flag is true, remove animation className
    if(this.state.animationEnd) {
      this.classNames = classnames({
        '-has-bid': this.props.model.price > 0,
        'bid-board component-well': true,
      })
    }

    return (
      <div 
        className={`bid-board component-well ${this.classNames}`}
        ref={(node) => {
          // When animation ends, set animaitonEnd flag to true
          node && node.addEventListener('animationend', () => {this.setState({animationEnd: true})}, false)
        }}>
        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="box">
              <label>Most Recent Bidder</label>
              <input className="w100" readOnly type="text" value={fullName} />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="box">
              <label>Bid Price</label>
              <input className="w100" readOnly type="text" value={formatMoney(price)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BidBoard.propTypes = {
  model: PropTypes.object.isRequired
}
