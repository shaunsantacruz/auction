// formats cents into USD money. e.g. 50000 -> $500.00
export const formatMoney = (cents, symbol = '$') => {
  if(typeof cents !== 'number') {
    throw new Error('Type error: formatMoney() expects currency in cents.')
  }
  return `${symbol}${(cents / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`
}

// unformats a value 500.00 -> 50000
export const unformatMoney = (value) => {
  if(value.indexOf('.') === -1) {
    // Special case handling of a whole number. e.g. 500 -> 500.00
    value = `${value}.00`
  }
  return parseInt(('' + value).replace(/[^0-9-]/g, ''), 10)
}

export const makeLog = ({id, fullName, buyerNumber}, amount) => ({
  userId: id,
  fullName,
  buyerNumber,
  amount,
  createdAt: Date.now(),
})

// timestamp is seconds
export const time = () => Math.floor(Date.now() / 1000)
