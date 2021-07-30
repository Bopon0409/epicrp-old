import Data from './dowload-confirmation-screen.json';

const DataJSON = JSON.stringify(Data);

// включить/отключить показ интерфейса
const setShow = (status) => window.trigger('download-confirmation-screen.show', status);
// загрузить данные 'окна подтверждения загрузки'
const setData = () => window.trigger('download-confirmation-screen.data', DataJSON);

window.test.DowloadConfirmationScreen = { setShow, setData };