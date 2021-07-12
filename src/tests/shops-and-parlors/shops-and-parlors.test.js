import Money from './money.json';
import Data from './data.json';

const MoneyJSON = JSON.stringify(Money);

const DataJSON = JSON.stringify(Data);

const setShow = (status) => window.trigger('shops-and-parlors.show', status);

const setMoney = () => window.trigger('shops-and-parlors.money', MoneyJSON);

const setData = () => window.trigger('shops-and-parlors.data', DataJSON);

window.test.shopsAndParlors = { setShow, setMoney, setData };