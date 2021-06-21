const open = () => window.trigger('death-menu.open')
const close = () => window.trigger('death-menu.close')

window.test.deathMenu = { open, close }