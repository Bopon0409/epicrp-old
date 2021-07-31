import './globals-declare.d.ts'

window.frontTrigger = (triggerName: string, ...args: any) => {
  if (window.mp) {
    if (args.length) args = args.map((el: any) => {
      return typeof el === 'object' ? JSON.stringify(el) : el
    })
    window.mp.trigger(triggerName, ...args)
  } else console.log(triggerName, ...args)
}

window.trigger = (eventName: string, ...args: any) => {
  const handlers = EventManager.events[eventName]
  console.log(handlers)
  if (!args) handlers.forEach((handler: any) => handler())
  else handlers.forEach((handler: any) => {
    handler(...args.map((arg: any) => JSON.parse(arg)))
  })
}

window.strTrigger = (eventName: string, ...args: any) => {
  const handlers = EventManager.events[eventName]
  if (!args) handlers.forEach((handler: any) => handler())
  else handlers.forEach((handler: any) => {
    handler(...args.map((arg: any) => arg))
  })
}

window.chatAPI = {
  'chat:push': msg => strTrigger('chat.push', msg),
  'chat:clear': () => trigger('chat.clear'),
  'chat:activate': active => trigger('chat.active', active),
  'chat:show': show => trigger('chat.show', show)
}

window.EventManager = {
  events: {},
  addHandler (eventName: string, handler: Function) {
    if (eventName in this.events) this.events[eventName].push(handler)
    else this.events[eventName] = [handler]
  },
  removeHandler (eventName: string, handler: Function) {
    if (eventName in this.events)
      this.events[eventName].splice(this.events[eventName].indexOf(handler), 1)
  }
}

window.test = {}