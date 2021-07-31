import workProgress    from './work-progress.json';
const jsonWorkProgress = JSON.stringify(workProgress);

// включить/отключить показ интерфейса
const setActive = (active) => window.trigger('work-progress.active', active);
// загрузить данные 'прогресса работы'
const setData = () => window.trigger('work-progress.data', jsonWorkProgress);

window.test.workProgress = {
  setActive, setData
}