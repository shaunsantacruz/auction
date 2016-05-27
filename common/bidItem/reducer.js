import * as a from './actions'

function getInitialStateByType(type = 'cattle') {
  switch (type) {
    case 'cattle':
      return {
        id: 0,
        name: '',
        count: 0,
        weight: 0,
        average_weight: 0,
        price_per: 0,
        sex: '',
        bid_price: 0,
        updated_at: '',
      }
    default:
      return {}
  }
}

export const initialState = getInitialStateByType('cattle')

export default (state = initialState, action) => {
  switch (action.type) {
    case a.SET_STATE:
      return {
        ...action.initialState
      }
    case a.SET_BID_PRICE:
      const {bid_price} = action
      return {
        ...state,
        bid_price
      }
    case a.SET_ID:
      const {id} = action
      return {
        ...state,
        id
      }

    default:
      return state
  }

}
