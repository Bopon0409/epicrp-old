import Inspection from './inspection.json';

const InspectionJSON = JSON.stringify(Inspection);

// включить/отключить показ интерфейса
const setActive = (active) => window.trigger('ems-inspection.active', active);
// загрузить данные 'inspection'
const setData = () => window.trigger('ems-inspection.data', InspectionJSON);

window.test.EMSInspection = {
    setActive, setData
}