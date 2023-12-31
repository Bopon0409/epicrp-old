const setActive = (active = true) =>
  window.trigger('speedometer.active', active)

// Установка значения максимальной скорости
const setMaxSpeed = max => window.trigger('speedometer.maxSpeed', max)
// Установка типа спидометра
const setType = (type = 1) => window.trigger('speedometer.type', type)

const testFuel = () => {
  let fuel = 0
  const interval = setInterval(() => {
    // Установка значения топлива
    window.trigger('speedometer.fuel', fuel++)
    if (fuel > 100) clearInterval(interval)
  }, 50)
}

const testSpeed = () => {
  let speed = 0
  const interval = setInterval(() => {
    // Установка значения скорости
    window.trigger('speedometer.speed', speed++)
    if (speed > 400) clearInterval(interval)
  }, 20)
}

const testBadges = () => {
  const data = [
    { badgeName: 'handBrake', value: true },
    { badgeName: 'handBrake', value: false },
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
    // Переключение значков спидометра
    window.trigger('speedometer.badge', JSON.stringify(data[counter++]))
    if (counter === 12) clearInterval(interval)
  }, 500)
}

window.test.speedometer = {
  setActive,
  setType,
  testSpeed,
  testFuel,
  testBadges,
  setMaxSpeed
}
