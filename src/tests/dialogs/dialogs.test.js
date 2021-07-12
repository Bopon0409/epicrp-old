import Data from './data.json';

const DataJSON = JSON.stringify(Data);

const setShow = (isShow) => window.trigger('dialogs.show', isShow);

const setData = () => window.trigger('dialogs.data', DataJSON);

window.test.dialogs = { setShow, setData }