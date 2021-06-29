import data from './gun-shop-data.json'

const jsonData = JSON.stringify(data)

const setActive = (active) => window.trigger('gun-shop.active', active)
const setData = () => window.trigger('gun-shop.data', jsonData)

window.test.gunShop = { setActive, setData }