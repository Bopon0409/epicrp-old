import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import store from './chat-store'
import MsgList from './modules/msg-list'
import ButtonView from './modules/button-view'
import chatInputIcon from './images/chat-input-icon.svg'

export default observer(() => {
  const { active, isShow } = store.state
  const { pushMessage, onInputChange, getInput } = store
  const { inputValue } = getInput()

  const skrollRef = useRef()
  const inputRef = useRef()
  const skrollingOnPushMsg = () => skrollRef.current?.scrollIntoView()

  useEffect(() => {
    const { EventManager: em } = window
    const keyPressHandlerWithSkroll = e => store.keyPressHandler(e, skrollRef)

    em.addHandler('chat.push', store.pushChatMsgFromClient)
    em.addHandler('chat.push', skrollingOnPushMsg)
    em.addHandler('chat.active', store.setChatActive)
    em.addHandler('chat.show', store.setChatShow)
    em.addHandler('chat.clear', store.clearChat)
    document.addEventListener('keyup', keyPressHandlerWithSkroll)

    return () => {
      em.removeHandler('chat.push', store.pushChatMsgFromClient)
      em.removeHandler('chat.push', skrollingOnPushMsg)
      em.removeHandler('chat.active', store.setChatActive)
      em.removeHandler('chat.show', store.setChatShow)
      em.removeHandler('chat.clear', store.clearChat)
      document.removeEventListener('keyup', keyPressHandlerWithSkroll)
    }
  })

  const inputContainer = active && (
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
        <ButtonView name='IC' value='ic' inputRef={inputRef} />
        <ButtonView name='ООС' value='b' inputRef={inputRef} />
        <ButtonView name='me' value='me' inputRef={inputRef} />
        <ButtonView name='do' value='do' inputRef={inputRef} />
        <ButtonView name='try' value='try' inputRef={inputRef} />
        <ButtonView name='Рация' value='f' inputRef={inputRef} />
        <ButtonView name='Департамент' value='d' inputRef={inputRef} />
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
  )

  return (
    <>
      <div className='chat' style={{ display: isShow ? 'block' : 'none' }}>
        <MsgList skrollRef={skrollRef} />
        {inputContainer}
      </div>
      {isShow && <div className='background-chat'></div>}
    </>
  )
})
