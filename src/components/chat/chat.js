import React, { Component } from 'react'
import MsgList from './modules/msg-list'

import './chat.scss'
import chatInputIcon from './images/chat-input-icon.svg'

export default class Chat extends Component {
  state = {
    active: true,
    isInput: true,
    activeBtn: 'ic',
    inputValue: '',
    messages: []
  }

  componentDidMount = () => {
    window.EventManager.addHandler(
      'setChatActive',
      this.setChatActive.bind(this)
    )
    window.EventManager.addHandler(
      'pushChatMsgFromClient',
      this.pushChatMsgFromClient.bind(this)
    )
    window.EventManager.addHandler('setChatInput', this.setChatInput.bind(this))
    window.EventManager.addHandler('clearChat', this.clearChat.bind(this))

    document.addEventListener('keydown', this.enterHandler, false)
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

  setChatInput = isInput => this.setState({ isInput })
  setChatActive = active => this.setState({ active })

  clearChat = () => this.setState({ messages: [] })

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.enterHandler, false)
  }

  enterHandler = event => {
    if (event.keyCode === 13 && this.state.isInput) this.pushMessage()
  }

  pushMessage = () => {
    const { activeBtn: type, inputValue: text } = this.state
    if (text) {
      if (window.mp) window.mp.trigger('pushMessageToClient', type, text)
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
    const { activeBtn, inputValue, messages, isInput: isShow } = this.state
    const { isInput, active } = this.state

    const chatStyle = active ? { display: 'block' } : { display: 'none' }

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

    return (
      <div className='chat' style={chatStyle}>
        <MsgList messages={messages} isInput={isInput} />
        {inputContainer}
      </div>
    )
  }
}
