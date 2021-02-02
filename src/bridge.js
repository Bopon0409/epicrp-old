import data from './components/inventory/data.json'

window.EventManager = {
  events: {},

  addHandler: function (eventName, handler) {
    if (eventName in this.events) {
      this.events[eventName].push(handler)
    } else {
      this.events[eventName] = [handler]
    }
  },

  removeHandler: function (eventName, handler) {
    if (eventName in this.events) {
      const index = this.events[eventName].indexOf(handler)
      this.events[eventName].splice(index, 1)
    }
  }
}

window.trigger = function (eventName, args) {
  const handlers = window.EventManager.events[eventName]
  handlers.forEach(handler => handler(JSON.parse(args)))
}

setTimeout(() => {
  const dataJson = JSON.stringify(data)
  window.trigger('setInventaryData', dataJson)
}, 3000)