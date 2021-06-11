const open = (gameType, isFirsTime) => {
  window.trigger('electrician.open', gameType, isFirsTime)
}
const close = () => window.trigger('electrician.close')

window.test.electrician = { open, close }