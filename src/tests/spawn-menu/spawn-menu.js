const set = (active, hasHouse = false, hasFraction = false) => {
  window.trigger('spawn-menu.set',
    JSON.stringify({ active, hasHouse, hasFraction })
  )
}

window.test.spawnMenu = { set }
