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

export default uData
