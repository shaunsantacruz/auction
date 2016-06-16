// formats cents into USD money. e.g. 50000 -> $500.00
export const formatMoney = (cents, symbol = '$') => {
  if(typeof cents !== 'number') {
    throw new Error('Type error: formatMoney() expects currency in cents.')
  }
  return `${symbol}${(cents / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`
}

// unformats a value returned in the format returned by the fn formatMoney. e.g. $500.00 -> 50000
export const unformatMoney = (value) => {
  // Handle a whole number. e.g. 500 -> 500.00
  if(value.indexOf('.') === -1) {
    value = `${value}.00`
  }
  return parseInt(('' + value).replace(/[^0-9-]/g, ''), 10)
}
