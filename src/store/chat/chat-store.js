import { makeAutoObservable } from 'mobx'

class ChatStore {
  OPACITY_DELAY = 20000000
  MAX_STORY_MESSAGE = 60

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
    isOpacity: false,
    opacityInterval: setInterval(() => {}, 0),
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
      this.store.storyMsg = this.store.storyMsg.slice(0, this.MAX_STORY_MESSAGE)
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

  setOpacity = isOpacity => (this.store.isOpacity = isOpacity)

  dropOpacity = isNewTimeout => {
    this.setOpacity(false)
    clearInterval(this.store.opacityInterval)
    if (isNewTimeout) {
      this.store.opacityInterval = setTimeout(() => {
        this.setOpacity(true)
      }, this.OPACITY_DELAY)
    }
  }

  pushChatMsgFromClient = msg => {
    if (msg.type) {
      this.store.messages.push(msg)
      this.dropOpacity(true)
    }
  }

  onInputChange = event => {
    const value = event.target.value
    this.store.inputValue = value
    if (value[0] === '/') {
      if (value.substr(1, 2) === 'b ') this.store.activeBtn = 'b'
      else if (value.substr(1, 3) === 'me ') this.store.activeBtn = 'me'
      else if (value.substr(1, 3) === 'do ') this.store.activeBtn = 'do'
      else if (value.substr(1, 4) === 'try ') this.store.activeBtn = 'try'
      else if (value.substr(1, 2) === 'f ') this.store.activeBtn = 'f'
      else if (value.substr(1, 2) === 'd ') this.store.activeBtn = 'd'
      else this.store.activeBtn = 'ic'
    }
  }

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

      if (active) this.dropOpacity(false)
      else this.dropOpacity(true)
    }
  }

  setActiveBtn = btn => {
    this.store.activeBtn = this.store.activeBtn !== btn ? btn : 'ic'
  }
}

export default new ChatStore()
