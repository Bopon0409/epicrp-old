import spawnMenu from './spawn-menu.json'

const jsonSpawnMenu = JSON.stringify(spawnMenu)
const Points = JSON.parse(jsonSpawnMenu).points
const { isCrime } = JSON.parse(jsonSpawnMenu)

const setActive = active => window.trigger('spawn-menu.active', active)
const setPoints = () => window.trigger('spawn-menu.points',
  JSON.stringify(Points)
)
const setIsCrime = () => window.trigger('spawn-menu.isCrime',
  JSON.stringify(isCrime)
)

window.test.spawnMenu = { setActive, setPoints, setIsCrime }