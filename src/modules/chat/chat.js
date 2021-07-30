import React, { useEffect, useRef } from 'react'
import { observer }                 from 'mobx-react-lite'
import store                        from './chat-store'
import MsgList                      from './components/msg-list'
import ButtonView                   from './components/button-view'
import chatInputIcon                from './images/chat-input-icon.svg'

export default observer(() => {
  const { active, isShow } = store.state
  const { pushMessage, onInputChange, setChatActive } = store

  const scrollRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    const { EventManager: em } = window
    const keyPressHandlerWithScroll = e => store.keyPressHandler(e)

    store.state.scrollRef = scrollRef
    em.addHandler('chat.push', store.pushChatMsgFromClient)
    em.addHandler('chat.active', store.setChatActive)
    em.addHandler('chat.show', store.setChatShow)
    em.addHandler('chat.clear', store.clearChat)
    em.addHandler('chat.params', store.setChatParams)
    document.addEventListener('keyup', keyPressHandlerWithScroll)

    return () => {
      store.state.scrollRef = null
      em.removeHandler('chat.push', store.pushChatMsgFromClient)
      em.removeHandler('chat.active', store.setChatActive)
      em.removeHandler('chat.show', store.setChatShow)
      em.removeHandler('chat.clear', store.clearChat)
      em.removeHandler('chat.params', store.setChatParams)
      document.removeEventListener('keyup', keyPressHandlerWithScroll)
    }
  }, [])

  const inputContainer = active && (
    <>
      <input
        type='text'
        className='chat-input'
        onChange={onInputChange}
        value={store.state.inputValue}
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
            setChatActive(false)
          }}
        />
      </div>
    </>
  )

  return isShow ? (
    <>
      <div className='chat'>
        <MsgList />
        {inputContainer}
      </div>
      {isShow && <div className='background-chat' />}
    </>
  ) : null
})
