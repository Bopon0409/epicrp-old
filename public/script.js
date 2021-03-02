document.addEventListener('DOMContentLoaded', () => (window.mp = mp))

EventManager = {
  events: {},
  addHandler (eventName, handler) {
    this.events[eventName] = handler
  },
  removeHandler (eventName) {
    if (eventName in this.events) this.events[eventName] = null
  }
}

chatAPI = {
  push: msg => trigger('pushChatMsgFromClient', msg),
  clear: () => trigger('clearChat'),
  activate: active => trigger('setChatActive', active),
  show: show => trigger('setChatShow', show)
}

function trigger (eventName, arg) {
  const handler = window.EventManager.events[eventName]
  arg ? handler(JSON.parse(arg)) : handler()
}

window.EventManager = EventManager
window.chatAPI = chatAPI
window.trigger = trigger
