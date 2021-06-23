import stats from './business-stats.json';
import warehouse from './business-warehouse.json';

const jsonStats = JSON.stringify(stats);
const jsonWarehouse = JSON.stringify(warehouse);

console.log('jsonStats', jsonStats)
const setActive = active => window.trigger('business-stats.active', active);
const setStats = () => window.trigger('business-stats.stats', jsonStats);
const setWarehouse = () => window.trigger('business-stats.warehouse', jsonWarehouse);

window.test.businessStats = { setActive, setStats, setWarehouse }