const { v4: uuid } = require('uuid')

const uData = item => {
  const isObjectCheck = item => typeof item === 'object' && !Array.isArray(item)
  const isArrayCheck = item => typeof item === 'object' && Array.isArray(item)

  if (isObjectCheck(item)) {
    for (const prop in item) item[prop] = uData(item[prop])
  } else if (isArrayCheck(item)) {
    item = item.map(i => (isObjectCheck(i) ? { ...uData(i), uid: uuid() } : i))
  }
  return item
}

export default uData
