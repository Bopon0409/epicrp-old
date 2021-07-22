import data from './shop-data.json'

const jsonData: string = JSON.stringify(data)

const setActive = (active: boolean): void => {
  window.trigger('shop.active', active)
}
const setData = (): void => {
  window.trigger('shop.data', jsonData)
}

window.test.shop = { setActive, setData }