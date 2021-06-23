import spawnMenu from './spawn-menu.json';

const jsonSpawnMenu = JSON.stringify(spawnMenu);
console.log('spawnMenuJson', JSON.parse(jsonSpawnMenu));
const Points = JSON.parse(jsonSpawnMenu).points;
const { isCrime } = JSON.parse(jsonSpawnMenu);
console.log(isCrime)

const setActive = active => window.trigger('spawn-menu.active', active);
const setPoints = () => window.trigger('spawn-menu.points', JSON.stringify(Points));
const setIsCrime = () => window.trigger('spawn-menu.isCrime', JSON.stringify(isCrime));

window.test.spawnMenu = { setActive, setPoints, setIsCrime }