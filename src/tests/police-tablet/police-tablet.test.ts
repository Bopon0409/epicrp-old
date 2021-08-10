const active = (active: boolean) => {
  window.trigger('police-tablet.active', active)
}

window.test.policeTablet = { active }