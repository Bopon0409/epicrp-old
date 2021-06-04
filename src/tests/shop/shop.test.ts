import data from './shop-data.json'

const jsonData: string = JSON.stringify(data)

const setActive = (active: boolean): void => {
  // @ts-ignore
  window.trigger('shop.active', active)
}
const setData = (): void => {
  // @ts-ignore
  window.trigger('shop.data', jsonData)
}

// @ts-ignore
window.test.shop = { setActive, setData }