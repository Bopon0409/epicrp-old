const setActive = (active = true) =>
  window.trigger('speedometer.active', active)

const setType = (type = 1) => window.trigger('speedometer.type', type)

const testFuel = () => {
  let fuel = 0
  const interval = setInterval(() => {
    window.trigger('speedometer.fuel', fuel++)
    if (fuel > 100) clearInterval(interval)
  }, 50)
}

const testSpeed = () => {
  let speed = 0
  const interval = setInterval(() => {
    window.trigger('speedometer.speed', speed++)
    if (speed > 300) clearInterval(interval)
  }, 20)
}

const testBadges = () => {
  const data = [
    { badgeName: 'fuel', value: true },
    { badgeName: 'fuel', value: false },
    { badgeName: 'engine', value: true },
    { badgeName: 'engine', value: false },
    { badgeName: 'lock', value: true },
    { badgeName: 'lock', value: false },
    { badgeName: 'lights', value: true },
    { badgeName: 'lights', value: false },
    { badgeName: 'electricity', value: true },
    { badgeName: 'electricity', value: false }
  ]

  let counter = 0
  const interval = setInterval(() => {
    window.trigger('speedometer.badge', JSON.stringify(data[counter++]))
    if (counter === 10) clearInterval(interval)
  }, 500)
}

export { setActive, setType, testSpeed, testFuel, testBadges }
