const setActive = (active = true) => window.trigger('hud.toggleBg', active)

window.test.bg = { setActive }
