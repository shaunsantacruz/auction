export const formatMoney = (cents) => `$ ${(cents / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`
