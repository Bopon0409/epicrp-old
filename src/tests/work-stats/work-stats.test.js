import workStats    from './work-stats.json';
const jsonWorkStats = JSON.stringify(workStats);

// включить/отключить показ интерфейса
const setActive = (active) => window.trigger('work-stats.active', active);
// загрузить данные 'статистики работы'
const setData = () => window.trigger('work-stats.data', jsonWorkStats);

window.test.workStats = {
  setActive, setData
}