import StateAgencyData from './state-agency.json';
const JSONStateAgency = JSON.stringify(StateAgencyData);

// показать/скрыть окно
const setShow = state => window.trigger('state-agency.show', state);
// загрузить данные в 'агенство недвижимости'
const setData = () =>  window.trigger('state-agency.data', JSONStateAgency);

window.test.stateAgency = { setShow, setData }