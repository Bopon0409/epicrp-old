type TTrigger = (eventName: string, ...args: any) => void
type TFrontTrigger = (triggerName: string, ...args: any) => void

interface IAlt {
  emit (eventName: string, ...args: any[]): void;
  off (eventName: string, listener: (...args: any[]) => void): void;
  on (eventName: string, listener: (...args: any[]) => void): void;
}

interface IChatAPI {
  'chat:push': (msg: string) => any
  'chat:clear': () => any
  'chat:activate': (active: falce) => any
  'chat:show': (show: falce) => any
}

interface IEventManager {
  events: any,
  addHandler: (eventName: string, handler: (...args: any[]) => void) => void
  removeHandler: (eventName: string, handler: (...args: any[]) => void) => void
}

interface Window {
  EventManager: IEventManager
  frontTrigger: TTrigger
  strTrigger: TTrigger
  trigger: TTrigger
  chatAPI: IChatAPI
  alt: IAlt
  test: any
}

declare var EventManager: IEventManager
declare var frontTrigger: TTrigger
declare var strTrigger: TTrigger
declare var trigger: TTrigger
declare var chatAPI: IChatAPI
declare var test: any
declare var alt: IAlt