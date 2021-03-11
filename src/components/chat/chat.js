import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import store from '../../store/chat/chat-store'
import MsgList from './modules/msg-list'
import chatInputIcon from './images/chat-input-icon.svg'

export default observer(() => {
  const { active, isShow } = store.state
  const { setActiveBtn, pushMessage, onInputChange, getInput } = store
  const { inputValue, activeBtn } = getInput()

  const skrollRef = useRef()
  const inputRef = useRef()
  const skrollingOnPushMsg = () => skrollRef.current.scrollIntoView()

  useEffect(() => {
    const { keyPressHandler, setChatActive, clearChat } = store
    const { setChatShow, pushChatMsgFromClient } = store
    const { active } = store.state
    const { EventManager } = window

    const skrollingOnPressEnter = event => {
      if (event.keyCode === 13 && active) skrollRef.current.scrollIntoView()
    }

    EventManager.addHandler('pushChatMsgFromClient', pushChatMsgFromClient)
    EventManager.addHandler('pushChatMsgFromClient', skrollingOnPushMsg)
    EventManager.addHandler('setChatActive', setChatActive)
    EventManager.addHandler('setChatShow', setChatShow)
    EventManager.addHandler('clearChat', clearChat)
    document.addEventListener('keyup', skrollingOnPressEnter)
    document.addEventListener('keyup', keyPressHandler)

    return () => {
      EventManager.removeHandler('pushChatMsgFromClient', pushChatMsgFromClient)
      EventManager.removeHandler('pushChatMsgFromClient', skrollingOnPushMsg)
      EventManager.removeHandler('setChatActive', setChatActive)
      EventManager.removeHandler('setChatShow', setChatShow)
      EventManager.removeHandler('clearChat', clearChat)
      document.removeEventListener('keyup', skrollingOnPressEnter)
      document.removeEventListener('keyup', keyPressHandler)
    }
  }, [])

  const inputContainer = active ? (
    <>
      <input
        type='text'
        className='chat-input'
        onChange={onInputChange}
        value={inputValue}
        ref={inputRef}
        autoFocus
      />

      <div className='btn-container'>
        <div
          className={activeBtn === 'ic' ? 'btn btn-active' : 'btn'}
          onClick={() => {
            setActiveBtn('ic')
            inputRef.current.focus()
          }}
        >
          IC <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'b' ? 'btn btn-active' : 'btn'}
          onClick={() => {
            setActiveBtn('b')
            inputRef.current.focus()
          }}
        >
          ООС <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'me' ? 'btn btn-active' : 'btn'}
          onClick={() => {
            setActiveBtn('me')
            inputRef.current.focus()
          }}
        >
          me <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'do' ? 'btn btn-active' : 'btn'}
          onClick={() => {
            setActiveBtn('do')
            inputRef.current.focus()
          }}
        >
          do <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'try' ? 'btn btn-active' : 'btn'}
          onClick={() => {
            setActiveBtn('try')
            inputRef.current.focus()
          }}
        >
          try <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'f' ? 'btn btn-active' : 'btn'}
          onClick={() => {
            setActiveBtn('f')
            inputRef.current.focus()
          }}
        >
          Рация <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'd' ? 'btn btn-active' : 'btn'}
          onClick={() => {
            setActiveBtn('d')
            inputRef.current.focus()
          }}
        >
          Департамент <div className='line'></div>
        </div>

        <img
          src={chatInputIcon}
          alt=''
          className='chat-input-icon'
          onClick={() => {
            pushMessage()
            skrollingOnPushMsg()
          }}
        />
      </div>
    </>
  ) : null

  return (
    <>
      <div className='chat' style={{ display: isShow ? 'block' : 'none' }}>
        <MsgList skrollRef={skrollRef} />
        {inputContainer}
      </div>
    </>
  )
})
