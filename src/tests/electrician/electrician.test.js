// gameType = 1-12 (12 игровых полей),
// isFirstTime - показывать подсказку перед игрой
const open = (isFirsTime = true, gameType = 1) => {
  window.trigger('electrician.open', gameType, isFirsTime)
}
const close = () => window.trigger('electrician.close')

window.test.electrician = { open, close }