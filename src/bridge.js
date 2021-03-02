window.EventManager = {
  events: {},

  addHandler: function (eventName, handler) {
    this.events[eventName] = handler
  },

  removeHandler: function (eventName, handler) {
    if (eventName in this.events) {
      this.events[eventName] = null
    }
  }
}

window.trigger = function (eventName, arg) {
  const handler = window.EventManager.events[eventName]
  arg ? handler(JSON.parse(arg)) : handler()
}
