import Inspection from './inspection.json';

const InspectionJSON = JSON.stringify(Inspection);
const setActive = (active) => window.trigger('ems-inspection.active', active);
const setData = () => window.trigger('ems-inspection.data', InspectionJSON);

window.test.EMSInspection = {
    setActive, setData
}