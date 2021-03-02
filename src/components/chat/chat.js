import React, { Component } from 'react'
import MsgList from './modules/msg-list'
import chatInputIcon from './images/chat-input-icon.svg'

export default class Chat extends Component {
  state = {
    active: false,
    isShow: false,
    activeBtn: 'ic',
    inputValue: '',
    messages: []
  }

  componentDidMount = () => {
    const { EventManager } = window
    EventManager.addHandler('setChatActive', this.setChatActive.bind(this))
    EventManager.addHandler('setChatShow', this.setChatShow.bind(this))
    EventManager.addHandler('clearChat', this.clearChat.bind(this))
    EventManager.addHandler(
      'pushChatMsgFromClient',
      this.pushChatMsgFromClient.bind(this)
    )
    document.addEventListener('keydown', this.enterHandler, false)
  }

  componentWillUnmount = () => {
    const { EventManager } = window
    EventManager.removeHandler('pushChatMsgFromClient')
    EventManager.removeHandler('setChatActive')
    EventManager.removeHandler('setChatShow')
    EventManager.removeHandler('clearChat')
    document.removeEventListener('keydown', this.enterHandler, false)
  }

  pushChatMsgFromClient = msg => {
    if (msg.type) {
      this.setState(({ messages }) => {
        const newMessages = messages.slice()
        newMessages.push(msg)
        return { messages: newMessages }
      })
    }
  }

  setChatShow = isShow => this.setState({ isShow })
  setChatActive = active =>
    this.setState(({ isShow }) => ({
      active,
      isShow: !active ? false : isShow
    }))

  clearChat = () => this.setState({ messages: [] })

  enterHandler = event => {
    if (event.keyCode === 13 && this.state.isInput) this.pushMessage()
  }

  pushMessage = () => {
    const { activeBtn: type, inputValue: text } = this.state
    if (text && window.mp) {
      window.mp.trigger('pushMessageToClient', type, text)
      this.setState({ activeBtn: 'ic', inputValue: '' })
    }
  }

  setActiveBtn = btn => {
    this.setState(({ activeBtn }) => ({
      activeBtn: activeBtn !== btn ? btn : 'ic'
    }))
  }

  onInputChange = event => this.setState({ inputValue: event.target.value })

  render () {
    const { activeBtn, inputValue, messages, active, isShow } = this.state

    const inputContainer = isShow ? (
      <>
        <input
          type='text'
          className='chat-input'
          onChange={this.onInputChange}
          value={inputValue}
        />

        <div className='btn-container'>
          <div
            className={activeBtn === 'ic' ? 'btn btn-active' : 'btn'}
            onClick={() => this.setActiveBtn('ic')}
          >
            IC <div className='line'></div>
          </div>
          <div
            className={activeBtn === 'b' ? 'btn btn-active' : 'btn'}
            onClick={() => this.setActiveBtn('b')}
          >
            ООС <div className='line'></div>
          </div>
          <div
            className={activeBtn === 'me' ? 'btn btn-active' : 'btn'}
            onClick={() => this.setActiveBtn('me')}
          >
            me <div className='line'></div>
          </div>
          <div
            className={activeBtn === 'do' ? 'btn btn-active' : 'btn'}
            onClick={() => this.setActiveBtn('do')}
          >
            do <div className='line'></div>
          </div>
          <div
            className={activeBtn === 'try' ? 'btn btn-active' : 'btn'}
            onClick={() => this.setActiveBtn('try')}
          >
            try <div className='line'></div>
          </div>
          <div
            className={activeBtn === 'f' ? 'btn btn-active' : 'btn'}
            onClick={() => this.setActiveBtn('f')}
          >
            Рация <div className='line'></div>
          </div>
          <div
            className={activeBtn === 'd' ? 'btn btn-active' : 'btn'}
            onClick={() => this.setActiveBtn('d')}
          >
            Департамент <div className='line'></div>
          </div>

          <img
            src={chatInputIcon}
            alt=''
            className='chat-input-icon'
            onClick={this.pushMessage}
          />
        </div>
      </>
    ) : null

    const chatStyle = { opacity: isShow ? '1' : '0' }

    return (
      <>
        {active ? (
          <div className='chat' style={chatStyle}>
            <MsgList messages={messages} />
            {inputContainer}
          </div>
        ) : null}
      </>
    )
  }
}
