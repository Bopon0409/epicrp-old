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
    if (text) {
      this.store.activeBtn = 'ic'
      this.store.inputValue = ''
      if (window.mp) window.mp.trigger('pushMessageToClient', type, text)
    }
  }

  pushChatMsgFromClient = msg => {
    msg.type && this.store.messages.push(msg)
  }
  onInputChange = event => (this.store.inputValue = event.target.value)
  enterHandler = event => event.keyCode === 13 && this.pushMessage()

  setChatShow = isShow => (this.store.isShow = isShow)
  clearChat = () => (this.store.messages = [])

  setChatActive = active => {
    this.store.active = active
    this.store.isShow = !active ? false : this.store.isShow
  }

  setActiveBtn = btn => {
    this.store.activeBtn = this.store.activeBtn !== btn ? btn : 'ic'
  }
}

export default new ChatStore()
