import React from 'react'

export default function MsgList ({ messages }) {
  const list = messages.map((msg, i) => {
    return (
      <div key={i} className={`msg-${msg.type}`}>
        {msg.text}
      </div>
    )
  })
  return <div className='container'>{list}</div>
}
