import data from './clothes-shop-data.json'

const jsonData = JSON.stringify(data)

const setActive = (active) => window.trigger('clothes-shop.active', active)
const setData = () => window.trigger('clothes-shop.data', jsonData)

window.test.clothesShop = { setActive, setData }