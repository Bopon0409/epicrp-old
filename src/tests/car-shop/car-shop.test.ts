import data from './car-shop-data.json'

const jsonData = JSON.stringify(data)

const setActive = (active: boolean) => window.trigger('car-shop.active', active)
const setData = () => window.trigger('car-shop.data', jsonData)

window.test.carShop = { setActive, setData }