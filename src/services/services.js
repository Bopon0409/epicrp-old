const { v4: uuid } = require('uuid')

const uData = item => {
  const isObject = item => typeof item === 'object' && !Array.isArray(item)
  const isArray = item => typeof item === 'object' && Array.isArray(item)

  if (isObject(item)) {
    for (const prop in item) item[prop] = uData(item[prop])
  } else if (isArray(item)) {
    item = item.map(i => (isObject(i) ? { ...uData(i), uid: uuid() } : i))
  }
  return item
}

const removeSpaces = num =>
  num
    .split('')
    .filter(el => el !== ' ')
    .join('')

const numberWithSpaces = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
const numberWithComma = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const numberWithDott = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

const cardNumber = num => {
  num = num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ')
  return num.split('').map((char, i, arr) => {
    return i < arr.length - 4 && char !== ' ' ? '*' : char
  })
}

export {
  uData,
  numberWithSpaces,
  numberWithComma,
  cardNumber,
  numberWithDott,
  removeSpaces
}
