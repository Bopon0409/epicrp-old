import spawnMenu from './spawn-menu.json'

const jsonSpawnMenu = JSON.stringify(spawnMenu)
const Points = JSON.parse(jsonSpawnMenu).points
const { isCrime } = JSON.parse(jsonSpawnMenu)

// показать/скрыть окно
const setActive = active => window.trigger('spawn-menu.active', active)
// назначить возможные точки спавна
const setPoints = () => window.trigger('spawn-menu.points',
  JSON.stringify(Points) )
// состоит ли игрок в криминальной орагнизации (true - da, false - net)
const setIsCrime = () => window.trigger('spawn-menu.isCrime',
  JSON.stringify(isCrime) )

window.test.spawnMenu = { setActive, setPoints, setIsCrime }