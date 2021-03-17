const { v4: uuidv4 } = require('uuid')

const uid = arg => {
  const isObj = variable => typeof variable === 'object'

  if (arg.constructor === Array) {
    arg = arg.map(value => {
      return isObj(value)
        ? { uid: uuidv4(), ...value }
        : { uid: uuidv4(), value }
    })
  } else {
    arg = isObj(arg) ? { uid: uuidv4(), ...arg } : { uid: uuidv4(), el: arg }
  }
  return arg
}

export default uid
