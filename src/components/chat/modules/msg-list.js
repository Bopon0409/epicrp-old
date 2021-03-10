import React from 'react'
import { observer } from 'mobx-react-lite'
import chatStore from '../../../store/chat/chat-store'

export default observer(({ skrollRef }) => {
  const { messages, active } = chatStore.store

  const getBasicMsg = (msg, i, arr) => (
    <div
      key={i}
      className={`msg-${msg.type}`}
      ref={i === arr.length - 1 ? skrollRef : null}
    >
      {msg.text}
    </div>
  )

  const getTryMsg = (msg, i, arr) => (
    <div
      key={i}
      className={`msg-me`}
      ref={i === arr.length - 1 ? skrollRef : null}
    >
      {msg.text}
      {msg.result ? (
        <span className='success'>{` | УДАЧНО`}</span>
      ) : (
        <span className='fail'>{` | НЕУДАЧНО`}</span>
      )}
    </div>
  )

  const getTodoMsg = (msg, i, arr) => (
    <div
      key={i}
      className={`msg-me`}
      ref={i === arr.length - 1 ? skrollRef : null}
    >
      <span className='todo'>{msg.text1}, </span>
      {msg.text2}
    </div>
  )

  return (
    <div className={active ? 'container skroll' : 'container'}>
      {messages.map((msg, i, arr) => {
        switch (msg.type) {
          case 'try':
            return getTryMsg(msg, i, arr)
          case 'todo':
            return getTodoMsg(msg, i, arr)
          default:
            return getBasicMsg(msg, i, arr)
        }
      })}
    </div>
  )
})
