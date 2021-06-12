import data        from './taxi-tablet-data.json'
import activeOrder from './active-order-data.json'
import orderData   from './order-data.json'

const setActive = (active) => window.trigger('taxi.active', active)
const setData = () => window.trigger('taxi.data', JSON.stringify(data))
const start = () => window.trigger('taxi.start', JSON.stringify(activeOrder))
const adOrder = () => window.trigger('taxi.order.ad', JSON.stringify(orderData))
const removeOrder = (id = 6) => window.trigger('taxi.order.remove', id)

window.test.taxiTablet = { setActive, setData, start, adOrder, removeOrder }