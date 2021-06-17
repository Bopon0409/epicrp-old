import React, { useRef } from 'react'
import { observer }      from 'mobx-react-lite'
import { store }         from '../admin-store'
import { Input }         from './input'

export const Console = observer(() => {
  let inputCommand = useRef<HTMLInputElement>(null) // команда
  const { console } = store.state

  return (
    <div className='console'>
      <div className='messages'>{
        console.map((v, id) =>
          <div className='message' key={id}>{v}</div>
        )}
      </div>
      <Input placeholder='Введите команду' action='console'
        blockRef={inputCommand} />
    </div>
  )
})