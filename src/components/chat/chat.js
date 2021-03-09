import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import chatStore from '../../store/chat/chat-store'
import MsgList from './modules/msg-list'
import chatInputIcon from './images/chat-input-icon.svg'

export default observer(() => {
  const { activeBtn, inputValue, active, isShow } = chatStore.store
  const { setActiveBtn, pushMessage, onInputChange } = chatStore

  useEffect(() => {
    const { enterHandler, setChatActive, clearChat } = chatStore
    const { setChatShow, pushChatMsgFromClient } = chatStore
    const { EventManager } = window

    EventManager.addHandler('setChatActive', setChatActive)
    EventManager.addHandler('setChatShow', setChatShow)
    EventManager.addHandler('clearChat', clearChat)
    EventManager.addHandler('pushChatMsgFromClient', pushChatMsgFromClient)
    document.addEventListener('keydown', enterHandler, false)

    return () => {
      EventManager.removeHandler('pushChatMsgFromClient')
      EventManager.removeHandler('setChatActive')
      EventManager.removeHandler('setChatShow')
      EventManager.removeHandler('clearChat')
      document.removeEventListener('keydown', enterHandler, false)
    }
  })

  const inputContainer = isShow ? (
    <>
      <input
        type='text'
        className='chat-input'
        onChange={onInputChange}
        value={inputValue}
      />

      <div className='btn-container'>
        <div
          className={activeBtn === 'ic' ? 'btn btn-active' : 'btn'}
          onClick={() => setActiveBtn('ic')}
        >
          IC <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'b' ? 'btn btn-active' : 'btn'}
          onClick={() => setActiveBtn('b')}
        >
          ООС <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'me' ? 'btn btn-active' : 'btn'}
          onClick={() => setActiveBtn('me')}
        >
          me <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'do' ? 'btn btn-active' : 'btn'}
          onClick={() => setActiveBtn('do')}
        >
          do <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'try' ? 'btn btn-active' : 'btn'}
          onClick={() => setActiveBtn('try')}
        >
          try <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'f' ? 'btn btn-active' : 'btn'}
          onClick={() => setActiveBtn('f')}
        >
          Рация <div className='line'></div>
        </div>
        <div
          className={activeBtn === 'd' ? 'btn btn-active' : 'btn'}
          onClick={() => setActiveBtn('d')}
        >
          Департамент <div className='line'></div>
        </div>

        <img
          src={chatInputIcon}
          alt=''
          className='chat-input-icon'
          onClick={pushMessage}
        />
      </div>
    </>
  ) : null

  return (
    <>
      {active ? (
        <div className='chat' style={{ opacity: isShow ? '1' : '0' }}>
          <MsgList />
          {inputContainer}
        </div>
      ) : null}
    </>
  )
})
