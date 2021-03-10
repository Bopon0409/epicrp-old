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
    storyMsg: [],
    storyPosition: -1,
    messages: []
  }

  pushMessage = () => {
    const { activeBtn, inputValue } = this.store
    if (inputValue.length > 0 && inputValue.length < 100) {
      if (window.mp) {
        const msg = `${activeBtn} ${inputValue}`
        const command = inputValue.substr(1)

        if (inputValue[0] === '/') window.mp.invoke('command', command)
        else if (activeBtn !== 'ic') window.mp.invoke('command', msg)
        else window.mp.invoke('chatMessage', inputValue)
      }

      this.store.storyMsg.unshift({ inputValue, activeBtn })
      this.store.storyMsg = this.store.storyMsg.slice(0, 60)
    }
  }

  getInput = () => {
    const { inputValue, activeBtn, storyPosition, storyMsg } = this.store
    return storyPosition !== -1
      ? storyMsg[storyPosition]
      : { inputValue, activeBtn }
  }

  chatDischarge = () => {
    this.store.activeBtn = 'ic'
    this.store.inputValue = ''
    this.store.storyPosition = -1
  }

  pushChatMsgFromClient = msg => msg.type && this.store.messages.push(msg)

  onInputChange = event => (this.store.inputValue = event.target.value)

  keyPressHandler = event => {
    const { storyPosition, active, storyMsg } = this.store
    switch (event.keyCode) {
      case 13:
        this.pushMessage()
        this.setChatActive(false)
        break
      case 27:
        this.setChatActive(false)
        break
      case 84:
        if (!active) this.setChatActive(true)
        break

      case 38:
        if (!active) return
        if (storyMsg.length > storyPosition + 1) this.store.storyPosition++
        break
      case 40:
        if (!active) return
        if (storyPosition > 0 && storyMsg[this.store.storyPosition - 1])
          this.store.storyPosition--
        else if (storyPosition === 0) {
          this.store.storyPosition--
          this.store.inputValue = ''
          this.store.activeBtn = 'ic'
        }
        break
      default:
    }
  }

  setChatShow = isShow => (this.store.isShow = isShow)
  clearChat = () => (this.store.messages = [])

  setChatActive = active => {
    if (this.store.isShow) {
      if (window.mp) window.mp.trigger('cef_cl_showCursor', active)
      this.store.active = active
      this.chatDischarge()
    }
  }

  setActiveBtn = btn => {
    this.store.activeBtn = this.store.activeBtn !== btn ? btn : 'ic'
  }
}

export default new ChatStore()
