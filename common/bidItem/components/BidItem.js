import React from 'react'

export default class extends React.Component {

  constructor(props) {
    super(props)

    this.foo = this.foo.bind(this)
  }

  foo() {

    console.log(this.props)
  }

  render() {

    const {bid_price} = this.props.model

    return (
      <div>
        <p>Bidders</p>
        <form action="#">
          <input
            type="text"
            onChange={this.foo}
            value={bid_price}
          />
        </form>
      </div>
    )
  }
}

