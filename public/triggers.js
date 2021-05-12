// noinspection ES6ConvertVarToLetConst

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
  'chat:push': msg => trigger('chat.push', msg),
  'chat:clear': () => trigger('chat.clear'),
  'chat:activate': active => trigger('chat.active', active),
  'chat:show': show => trigger('chat.show', show)
}

function trigger (eventName, ...args) {
  const handlers = EventManager.events[eventName]
  if (!args) handlers.forEach(handler => handler())
  else handlers.forEach(handler => handler(...args.map(arg => JSON.parse(arg))))
}

function frontTrigger (triggerName, ...args) {
  if (window.mp) {
    if (args.length)
      args = args.map(el => (typeof el === 'object' ? JSON.stringify(el) : el))
    window.mp.trigger(triggerName, ...args)
  } else console.log(triggerName, ...args)
}

document.addEventListener('DOMContentLoaded', () => {
  window.mp = mp
  if (window.mp) for (let fn in chatAPI) mp.events.add(fn, chatAPI[fn])
})

window.EventManager = EventManager
window.chatAPI = chatAPI
window.trigger = trigger
window.frontTrigger = frontTrigger
window.test = {}