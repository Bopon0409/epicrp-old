import React, { useRef } from 'react'
import { observer }      from 'mobx-react-lite'
import { store }         from '../admin-store'
import { Input }         from './input'

export const Chat = observer(() => {
  let messagesEnd = useRef<HTMLInputElement>(null)
  const { chat } = store.state

  return (
    <div className='chat_block'>
      <div className='messages' ref={messagesEnd}>{
        chat.map((v, id) =>
          <div className='message' key={id}>
            <span className='message-lvl'>{v.lvl} lvl </span>
            <span className='message-name'>{v.name}: </span>
            <span className='message-msg'>{v.msg}</span>
          </div>
        )}
      </div>
      <Input placeholder='Введите текст' action='chat' blockRef={messagesEnd} />
    </div>
  )
})