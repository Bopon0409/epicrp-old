document.addEventListener('DOMContentLoaded', () => (window.mp = mp))

var EventManager = {
  events: {},
  addHandler (eventName, handler) {
    if (eventName in this.events) this.events[eventName].push(handler)
    else this.events[eventName] = [handler]
  },
  removeHandler (eventName, handler) {
    if (eventName in this.events)
      this.events[eventName].splice(this.events[eventName].indexOf(handler), 1)
  }
}

var chatAPI = {
  push: msg => trigger('pushChatMsgFromClient', msg),
  clear: () => trigger('clearChat'),
  activate: active => trigger('setChatActive', active),
  show: show => trigger('setChatShow', show)
}

function trigger (eventName, ...args) {
  const handlers = EventManager.events[eventName]
  const jsonArgs = args.map(arg => JSON.parse(arg))
  handlers.forEach(handler => args ? handler(...jsonArgs) : handler())
}

window.EventManager = EventManager
window.chatAPI = chatAPI
window.trigger = trigger
