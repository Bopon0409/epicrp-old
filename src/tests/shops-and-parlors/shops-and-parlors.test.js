import Money from './money.json';
import Data from './data.json';

const MoneyJSON = JSON.stringify(Money);

const DataJSON = JSON.stringify(Data);

// отбразить/скрыть интерфейс магазина
const setShow = (status) => window.trigger('shops-and-parlors.show', status);
// задать деньги для худа (наличные, и две банк. карты)
const setMoney = () => window.trigger('shops-and-parlors.money', MoneyJSON);
// задать данные для всего магазина одежды
const setData = () => window.trigger('shops-and-parlors.data', DataJSON);

window.test.shopsAndParlors = { setShow, setMoney, setData };