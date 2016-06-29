import * as a from './actions'

export function getInitialStateByType(type = 'cattle') {
  switch (type) {
    case 'cattle':
      return {
        type,
        id: 0,
        name: '',
        headCount: 0,
        weight: 0,
        averageWeight: 0,
        pricePer: 0,
        variant: '',
        price: 0,
        updatedAt: '',
      }
    default:
      return {}
  }
}

export const initialState = getInitialStateByType()

export default (state = initialState, action) => {
  switch (action.type) {
    case a.MERGE_STATE: {
      const newState = action.payload.state
      console.log(newState)
      return {
        ...state,
        ...newState
      }
    }
    case a.SET_STATE: {
      const {state} = action.payload
      return state
    }
    case a.SET_PRICE: {
      const {price} = action.payload
      return {
        ...state,
        price
      }
    }
    case a.ADJUST_PRICE: {
      let {price} = action.payload
      price += state.price
      return {
        ...state,
        price
      }
    }
    case a.SET_ID: {
      const {id} = action.payload
      return {
        ...state,
        id
      }
    }
    case a.SET_VARIANT: {
      const {variant} = action.payload
      return {
        ...state,
        variant
      }
    }
    default:
      return state
  }

}
