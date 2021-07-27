import data from './shop-data.json'

const jsonData: string = JSON.stringify(data)

const setActive = (active: boolean) => window.trigger('shop.active', active)
const setData = () => window.trigger('shop.data', jsonData)
// Очистка корзины (после успешной покупки)
const clear = () => window.trigger('shop.cart.clear')

window.test.shop = { setActive, setData, clear }