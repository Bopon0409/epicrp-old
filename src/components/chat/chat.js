import React, { Component } from 'react'
import MsgList from './modules/msg-list'

import './chat.scss'
import chatInputIcon from './images/chat-input-icon.svg'

export default class Chat extends Component {
  state = {
    active: false,
    isInput: true,
    activeBtn: 'ic',
    inputValue: '',
    messages: [
      {
        type: 'ic',
        text: 'Admin Adminov[16]: Lorem ipsum dolor sit amet, consectetur',
      },
      {
        type: 'ooc',
        text: `Test Testov[11]: (( Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
          commodo viverra maecenas accumsan lacus vel facilisis. ))`
      },
      {
        type: 'me',
        text: 'Main Player[0] сказал что-то по рации'
      },
      {
        type: 'f',
        text: '[R] Main Player[0]: Lincoln-1 | Имеются активные юниты на сцене?'
      },
      {
        type: 'a',
        text: `Администратор Admin Adminov выдал мут игроку Main Player[0] на 120
        минут. Причина: Offtop /f`
      },
      {
        type: 'd',
        text: '[D] Business Woman: LSPD to GOV | На связь'
      }
    ]
  }

  componentDidMount = () => {
    window.EventManager.addHandler(
      'setChatActive',
      this.setChatActive.bind(this)
    )
    document.addEventListener('keydown', this.enterHandler, false)
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.enterHandler, false)
  }

  enterHandler = event => {
    if (event.keyCode === 13 && this.state.isInput) this.pushMessage()
  }

  pushMessage = () => {
    const { activeBtn: type, inputValue: text } = this.state
    if (text) {
      const data = { type, text }
      console.log(data)
      this.setState({ activeBtn: 'ic', inputValue: '' })
    }
  }

  setActiveBtn = btn => {
    this.setState(({ activeBtn }) => ({
      activeBtn: activeBtn !== btn ? btn : 'ic'
    }))
  }

  setChatActive = active => this.setState({ active })
  onInputChange = event => this.setState({ inputValue: event.target.value })

  render () {
    const { activeBtn, inputValue, messages, isInput: isShow } = this.state

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
      <div className='chat'>
        <MsgList messages={messages} />
        {inputContainer}
      </div>
    )
  }
}
