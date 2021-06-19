// noinspection JSIgnoredPromiseFromCall

import { makeAutoObservable } from 'mobx'

class ChatStore {
  OPACITY_DELAY = 20000000
  MAX_CHAT_MESSAGES = 700
  MAX_STORY_MESSAGE = 60

  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    isShow: false,
    activeBtn: 'ic',
    inputValue: '',
    storyMsg: [],
    storyPosition: -1,
    isOpacity: false,
    messages: []
  }

  pushMessage = () => {
    const { activeBtn, inputValue } = this.state
    if (inputValue.length > 0 && inputValue.length < 100) {
      if (window.mp) {
        const msg = `${activeBtn} ${inputValue}`
        const command = inputValue.substr(1)

        if (inputValue[0] === '/') window.mp.invoke('command', command)
        else if (activeBtn !== 'ic') window.mp.invoke('command', msg)
        else window.mp.invoke('chatMessage', inputValue)
      }

      this.state.storyMsg.unshift({ inputValue, activeBtn })
      this.state.storyMsg = this.state.storyMsg.slice(0, this.MAX_STORY_MESSAGE)
    }
  }

  chatDischarge = () => {
    this.state.activeBtn = 'ic'
    this.state.inputValue = ''
    this.state.storyPosition = -1
  }

  setOpacity = isOpacity => (this.state.isOpacity = isOpacity)

  dropOpacity = isNewTimeout => {
    this.setOpacity(false)
    clearInterval(this.state.opacityInterval)
    if (isNewTimeout) {
      this.state.opacityInterval = setTimeout(() => {
        this.setOpacity(true)
      }, this.OPACITY_DELAY)
    }
  }

  pushChatMsgFromClient = msg => {
    const { messages } = this.state
    if (msg.type) {
      messages.push(msg)
      if (messages.length > this.MAX_CHAT_MESSAGES) messages.shift()
      this.dropOpacity(true)
    }
  }

  onInputChange = event => {
    const { value } = event.target
    if (value.length < 135) {
      this.state.inputValue = value
      if (value[0] === '/') this.checkOnCommand(value)
    }
  }

  checkOnCommand = value => {
    if (value.substr(1, 2) === 'b ') this.state.activeBtn = 'b'
    else if (value.substr(1, 3) === 'me ') this.state.activeBtn = 'me'
    else if (value.substr(1, 3) === 'do ') this.state.activeBtn = 'do'
    else if (value.substr(1, 4) === 'try ') this.state.activeBtn = 'try'
    else if (value.substr(1, 2) === 'f ') this.state.activeBtn = 'f'
    else if (value.substr(1, 2) === 'd ') this.state.activeBtn = 'd'
    else this.state.activeBtn = 'ic'
  }

  keyPressHandler = (event, scrollRef) => {
    const { storyPosition, active, storyMsg } = this.state
    switch (event.keyCode) {
      case 13:
        if (active) {
          scrollRef.current?.scrollIntoView()
          this.pushMessage()
          this.setChatActive(false)
        }
        break

      case 27:
        if (active) this.setChatActive(false)
        break

      case 84:
        if (!active) this.setChatActive(true)
        break

      case 38:
        if (!active) return
        if (storyMsg.length > storyPosition + 1) {
          const pos = ++this.state.storyPosition
          this.state.inputValue = storyMsg[pos].inputValue
          this.state.activeBtn = storyMsg[pos].activeBtn
        }
        break

      case 40:
        if (!active) return
        if (storyPosition > 0 && storyMsg[this.state.storyPosition - 1]) {
          const pos = --this.state.storyPosition
          this.state.inputValue = storyMsg[pos].inputValue
          this.state.activeBtn = storyMsg[pos].activeBtn
        } else if (storyPosition === 0) {
          this.state.storyPosition--
          this.state.inputValue = ''
          this.state.activeBtn = 'ic'
        }
        break
      default:
    }
  }

  setChatShow = isShow => (this.state.isShow = isShow)
  clearChat = () => (this.state.messages = [])

  setChatActive = active => {
    if (this.state.isShow) {
      if (window.mp) {
        window.mp.invoke('focus', active)
        window.mp.trigger('chat.toggle', active)
      }
      this.state.active = active
      this.chatDischarge()

      if (active) this.dropOpacity(false)
      else this.dropOpacity(true)
    }
  }

  setActiveBtn = btn => {
    this.state.activeBtn = this.state.activeBtn !== btn ? btn : 'ic'
  }
}

export default new ChatStore()