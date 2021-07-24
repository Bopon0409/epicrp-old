type TTrigger = (eventName: string, ...args: any) => void
type TFrontTrigger = (triggerName: string, ...args: any) => void

interface TChatAPI {
  'chat:push': (msg: string) => any
  'chat:clear': () => any
  'chat:activate': (active: falce) => any
  'chat:show': (show: falce) => any
}

interface TEventManager {
  events: any,
  addHandler: (eventName: string, handler: Function) => void
  removeHandler: (eventName: string, handler: Function) => void
}

interface Window {
  EventManager: TEventManager
  frontTrigger: TTrigger
  strTrigger: TTrigger
  trigger: TTrigger
  chatAPI: TChatAPI
  test: any
  mp: any
}

declare var EventManager: TEventManager
declare var frontTrigger: TTrigger
declare var strTrigger: TTrigger
declare var trigger: TTrigger
declare var chatAPI: TChatAPI
declare var test: any
declare var mp: any