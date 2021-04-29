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
  push: msg => trigger('chat.push', msg),
  clear: () => trigger('chat.clear'),
  activate: active => trigger('chat.active', active),
  show: show => trigger('chat.show', show)
}

function trigger (eventName, ...args) {
  const handlers = EventManager.events[eventName]
  if (!args) handlers.forEach(handler => handler())
  else handlers.forEach(handler => handler(...args.map(arg => JSON.parse(arg))))
}

function clientTrigger (triggerName, ...args) {
  if (window.mp) {
    if (args.length)
      args = args.map(el => (typeof el === 'object' ? JSON.stringify(el) : el))
    window.mp.trigger(triggerName, ...args)
  } else {
    // console.log(triggerName, ...args)
  }
}

window.EventManager = EventManager
window.chatAPI = chatAPI
window.trigger = trigger
window.clientTrigger = clientTrigger
window.test = {}
