import Data from './dowload-confirmation-screen.json';

const DataJSON = JSON.stringify(Data);

const setShow = (status) => window.trigger('download-confirmation-screen.show', status);

const setData = () => window.trigger('download-confirmation-screen.data', DataJSON);

window.test.DowloadConfirmationScreen = { setShow, setData };