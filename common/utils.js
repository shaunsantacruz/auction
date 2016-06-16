// formats cents into USD money. e.g. 50000 -> $500.00
export const formatMoney = (cents, symbol = '$') => {
  if(typeof cents !== 'number') {
    throw new Error('Type error: This fn expects currency in cents as a Number.')
  }
  return `${symbol}${(cents / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`
}

// unformats a value returned by formatMoney. e.g. $500.00 -> 50000
export const unformatMoney = (value) => {
  // since this fn assumes a decimal, let's throw an error if there isn't one
  if(value.indexOf('.') === -1) {
    throw new Error('Decimal required to use this fn.')
  }
  return parseInt(('' + value).replace(/[^0-9-]/g, ''), 10)
}
