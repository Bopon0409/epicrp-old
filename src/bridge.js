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

window.trigger = function (eventName, ...args) {
  const handlers = window.EventManager.events[eventName]
  handlers.forEach(handler => (args.length ? handler(...args) : handler()))
}

window.chatApi = {
  push: (type, text, text1, text2, result) => {
    window.trigger('pushChatMsgFromClient', {
      type,
      text,
      text1,
      text2,
      result
    })
  },
  clear: () => window.trigger('clearChat'),
  activate: active => window.trigger('setChatInput', active),
  show: active => window.trigger('setChatActive', active)
}
