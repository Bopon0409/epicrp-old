const fs = require('fs')

const data = []
const fileName = ''

fs.writeFile(`${fileName}.json`, JSON.stringify(data), err => {
  if (err) throw err
  console.log(`File '${fileName}' was created successfuly :3`)
})
