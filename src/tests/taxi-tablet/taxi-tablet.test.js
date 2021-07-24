import data        from './taxi-tablet-data.json'
import activeOrder from './active-order-data.json'
import orderData   from './order-data.json'

const setActive = (active) => window.trigger('taxi.active', active)
const setData = () => window.trigger('taxi.data', JSON.stringify(data))

// Взятие заказа
const start = () => window.trigger('taxi.start', JSON.stringify(activeOrder))

// Добавление заказа в список
const adOrder = () => window.trigger('taxi.order.ad', JSON.stringify(orderData))
// Удаление заказа из списка
const removeOrder = (id = 6) => window.trigger('taxi.order.remove', id)

window.test.taxiTablet = { setActive, setData, start, adOrder, removeOrder }