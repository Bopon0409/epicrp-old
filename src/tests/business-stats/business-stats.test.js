import stats from './business-stats.json';
import warehouse from './business-warehouse.json';
import products from './business-products.json';
import advance from './business-advance.json';
import irlItems from './business-products-irl.json';
import staff from './business-staff.json'

const jsonStats = JSON.stringify(stats);
const jsonWarehouse = JSON.stringify(warehouse);
const jsonProducts = JSON.stringify(products);
const jsonIrlItems = JSON.stringify(irlItems);
const jsonAdvance = JSON.stringify(advance);
const jsonStaff = JSON.stringify(staff);

const setActive = active => window.trigger('business-stats.active', active);
const setStats = () => window.trigger('business-stats.stats', jsonStats);
const setWarehouse = () => window.trigger('business-stats.warehouse', jsonWarehouse);
const setProductsItems = () => window.trigger('business-stats.products-items', jsonProducts); 
const setAdvance = () => window.trigger('business-stats.advance', jsonAdvance)
const setProductsIrlItems = () => window.trigger('business-stats.products-irl-items', jsonIrlItems);
const setStaff = () => window.trigger('business-stats.staff', jsonStaff);

window.test.businessStats = { setActive, setStats, setWarehouse, 
    setProductsItems, setAdvance, setProductsIrlItems, setStaff }