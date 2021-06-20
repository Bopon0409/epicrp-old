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

const formatNum = (num, filler) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, filler)
}

const formatCardNumber = num => {
  num = num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ')
  return num.split('').map((char, i, arr) => {
    return i < arr.length - 4 && char !== ' ' ? '*' : char
  })
}

const clearFormatNum = (num, filler) => {
  const arr = num.split('')
  return arr.filter(el => el !== filler).join('')
}

const priceFormat = (price) => {
  let priceStr = price + "";

  return priceStr
    .split(/(?=(?:\d{3})+(?!\d))/)
    .join(".");
}



export { uData, formatNum, formatCardNumber, clearFormatNum, priceFormat }
