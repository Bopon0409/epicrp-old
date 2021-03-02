import React from 'react'

export default function MsgList ({ messages }) {
  const getBasicMsg = (msg, i) => {
    return (
      <div key={i} className={`msg-${msg.type}`}>
        {msg.text}
      </div>
    )
  }

  const getTryMsg = (msg, i) => {
    return (
      <div key={i} className={`msg-me`}>
        {msg.text}

        {msg.result ? (
          <span className='success'>| УДАЧНО</span>
        ) : (
          <span className='fail'>| НЕУДАЧНО</span>
        )}
      </div>
    )
  }

  const getTodoMsg = (msg, i) => {
    return (
      <div key={i} className={`msg-me`}>
        <span className='todo'>{msg.text1}, </span>
        {msg.text2}
      </div>
    )
  }

  const list = messages.map((msg, i) => {
    if (msg.type === 'try') return getTryMsg(msg, i)
    else if (msg.type === 'todo') return getTodoMsg(msg, i)
    else return getBasicMsg(msg, i)
  })

  return <div className='container'>{list}</div>
}
