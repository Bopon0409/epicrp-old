import './globals-declare.d.ts'

window.frontTrigger = (triggerName: string, ...args: any) => {
  if (window.alt) {
    if (args.length) args = args.map((el: any) => {
      return typeof el === 'object' ? JSON.stringify(el) : el
    })
    window.alt.emit(triggerName, ...args)
  } else console.log(triggerName, ...args)
}

window.trigger = (eventName: string, ...args: any) => {
  const handlers = EventManager.events[eventName]
  if (!args) handlers.forEach((handler: any) => handler())
  else handlers.forEach((handler: any) => {
    handler(...args.map((arg: any) => {
      try {
        return typeof arg === 'string' ? JSON.parse(arg) : arg
      } catch (e) {
        return arg
      }
    }))
  })
}

window.strTrigger = (eventName: string, ...args: any) => {
  const handlers = EventManager.events[eventName]
  if (!args) handlers.forEach((handler: any) => handler())
  else handlers.forEach((handler: any) => {
    handler(...args.map((arg: any) => arg))
  })
}

window.EventManager = {
  events: {},
  addHandler (eventName: string, handler: (...args: any[]) => void) {
    if (eventName in this.events) this.events[eventName].push(handler)
    else this.events[eventName] = [handler]
    if (window.alt) window.alt.on(eventName, handler)
  },
  removeHandler (eventName: string, handler: (...args: any[]) => void) {
    if (eventName in this.events) {
      this.events[eventName].splice(this.events[eventName].indexOf(handler), 1)
      if (window.alt) window.alt.off(eventName, handler)
    }
  }
}

window.test = {}