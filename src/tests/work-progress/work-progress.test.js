import workProgress    from './work-progress.json';
const jsonWorkProgress = JSON.stringify(workProgress);

const setActive = (active) => window.trigger('work-progress.active', active);
const setData = () => window.trigger('work-progress.data', jsonWorkProgress);

window.test.workProgress = {
  setActive, setData
}