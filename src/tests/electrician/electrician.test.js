const open = (gameType = 1, isFirsTime = true) => {
  window.trigger('electrician.open', gameType, isFirsTime)
}
const close = () => window.trigger('electrician.close')

window.test.electrician = { open, close }