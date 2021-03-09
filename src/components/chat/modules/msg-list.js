import React from 'react'
import { observer } from 'mobx-react-lite'
import chatStore from '../../../store/chat/chat-store'

export default observer(() => {
  const { messages } = chatStore.store
  
  const getBasicMsg = (msg, i) => (
    <div key={i} className={`msg-${msg.type}`}>
      {msg.text}
    </div>
  )

  const getTryMsg = (msg, i) => (
    <div key={i} className={`msg-me`}>
      {msg.text}
      {msg.result ? (
        <span className='success'>| УДАЧНО</span>
      ) : (
        <span className='fail'>| НЕУДАЧНО</span>
      )}
    </div>
  )

  const getTodoMsg = (msg, i) => (
    <div key={i} className={`msg-me`}>
      <span className='todo'>{msg.text1}, </span>
      {msg.text2}
    </div>
  )

  return (
    <div className='container'>
      {messages.map((msg, i) => {
        switch (msg.type) {
          case 'try':
            return getTryMsg(msg, i)
          case 'todo':
            return getTodoMsg(msg, i)
          default:
            return getBasicMsg(msg, i)
        }
      })}
    </div>
  )
})
