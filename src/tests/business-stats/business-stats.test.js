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

// включить/отключить показ интерфейса
const setActive = active => window.trigger('business-stats.active', active);
// загрузить данные 'статистики'
const setStats = () => window.trigger('business-stats.stats', jsonStats);
// загрузить данные 'склад'
const setWarehouse = () => window.trigger('business-stats.warehouse', jsonWarehouse);
// загрузить данные 'товары gta'
const setProductsItems = () => window.trigger('business-stats.products-items', jsonProducts); 
// загрузить данные 'товары irl'
const setProductsIrlItems = () => window.trigger('business-stats.products-irl-items', jsonIrlItems);
// загрузить данные 'улучшения'
const setAdvance = () => window.trigger('business-stats.advance', jsonAdvance)
// загрузить данные 'сотрудники'
const setStaff = () => window.trigger('business-stats.staff', jsonStaff);

window.test.businessStats = { setActive, setStats, setWarehouse, 
    setProductsItems, setAdvance, setProductsIrlItems, setStaff }