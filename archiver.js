const output = require('fs').createWriteStream('build.zip')
const archive = require('archiver')('zip')

output.on('close', () => console.log('Archive created success'))
archive.on('error', err => {
  console.log(err)
  throw err
})
archive.pipe(output)
archive.directory(require('path').resolve(__dirname, 'build'), false)
archive.finalize()
