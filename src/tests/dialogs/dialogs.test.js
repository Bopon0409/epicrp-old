import Data from './data.json'

const DataJSON = JSON.stringify(Data)
// показать/скрыть диалоги
const setShow = (isShow) => window.trigger('dialogs.show', isShow)
// передать данные
const setData = () => window.trigger('dialogs.data', DataJSON)

window.test.dialogs = { setShow, setData }