import { makeAutoObservable } from 'mobx'

class ChatStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  store = {
    active: false,
    isShow: false,
    activeBtn: 'ic',
    inputValue: '',
    messages: []
  }

  pushMessage = () => {
    const { activeBtn: type, inputValue: text } = this.store
    const msg = JSON.stringify({ type, text })
    if (text) {
      if (window.mp) {
        text[0] === '/'
          ? window.mp.invoke('command', text.substr(1))
          : window.mp.invoke('chatMessage', msg)
      }
    }
    this.setChatActive(false)
  }

  chatDischarge = () => {
    this.store.activeBtn = 'ic'
    this.store.inputValue = ''
  }

  pushChatMsgFromClient = msg => msg.type && this.store.messages.push(msg)

  onInputChange = event => (this.store.inputValue = event.target.value)
  
  keyPressHandler = event => {
    switch (event.keyCode) {
      case 13:
        this.pushMessage()
        break
      case 27:
        this.setChatActive(false)
        break
      case 84:
        if (!this.store.active) this.setChatActive(true)
        break
      default:
    }
  }

  setChatShow = isShow => (this.store.isShow = isShow)
  clearChat = () => (this.store.messages = [])

  setChatActive = active => {
    if (window.mp) window.mp.trigger('cef_cl_showCursor', active)
    this.store.active = active
    this.chatDischarge()
  }

  setActiveBtn = btn => {
    this.store.activeBtn = this.store.activeBtn !== btn ? btn : 'ic'
  }
}

export default new ChatStore()
