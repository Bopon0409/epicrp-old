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

window.trigger = function (eventName, arg) {
  const handlers = window.EventManager.events[eventName]
  handlers.forEach(handler => (arg ? handler(JSON.parse(arg)) : handler()))
}

window.chatApi = {
  push: msg => window.trigger('pushChatMsgFromClient', JSON.stringify(msg)),
  clear: () => window.trigger('clearChat'),
  activate: active => window.trigger('setChatInput', active),
  show: active => window.trigger('setChatActive', active)
}
