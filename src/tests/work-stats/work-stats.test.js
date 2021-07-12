import workStats    from './work-stats.json';
const jsonWorkStats = JSON.stringify(workStats);

const setActive = (active) => window.trigger('work-stats.active', active);
const setData = () => window.trigger('work-stats.data', jsonWorkStats);

window.test.workStats = {
  setActive, setData
}