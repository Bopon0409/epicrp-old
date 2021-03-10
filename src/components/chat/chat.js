import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import chatStore from '../../store/chat/chat-store'
import MsgList from './modules/msg-list'
import chatInputIcon from './images/chat-input-icon.svg'

export default observer(() => {
  const { activeBtn, inputValue, active, isShow } = chatStore.store
  const { setActiveBtn, pushMessage, onInputChange } = chatStore

  const skrollRef = useRef()
  const inputRef = useRef()
  const skrollHandler = () => skrollRef.current.scrollIntoView()
  const skrollEnterHandler = event =>
    event.keyCode === 13 && skrollRef.current.scrollIntoView()

  useEffect(() => {
    const { keyPressHandler, setChatActive, clearChat } = chatStore
    const { setChatShow, pushChatMsgFromClient } = chatStore
    const { EventManager } = window

    EventManager.addHandler('pushChatMsgFromClient', pushChatMsgFromClient)
    EventManager.addHandler('pushChatMsgFromClient', skrollHandler)
    EventManager.addHandler('setChatActive', setChatActive)
    EventManager.addHandler('setChatShow', setChatShow)
    EventManager.addHandler('clearChat', clearChat)
    document.addEventListener('keyup', skrollEnterHandler)
    document.addEventListener('keyup', keyPressHandler)

    return () => {
      EventManager.removeHandler('pushChatMsgFromClient', pushChatMsgFromClient)
      EventManager.removeHandler('pushChatMsgFromClient', skrollHandler)
      EventManager.removeHandler('setChatActive', setChatActive)
      EventManager.removeHandler('setChatShow', setChatShow)
      EventManager.removeHandler('clearChat', clearChat)
      document.removeEventListener('keyup', skrollEnterHandler)
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
            skrollHandler()
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
