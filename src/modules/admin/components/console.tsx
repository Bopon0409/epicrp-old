import React, { useRef } from 'react'
import { observer }      from 'mobx-react-lite'
import { store }         from '../admin-store'
import { Input }         from './input'

export const Console = observer(() => {
  let inputCommand = useRef<HTMLInputElement>(null) // команда
  const { state: { console }, consoleDispatch } = store

  return (
    <div className='console'>
      <div className='messages'>{
        console.map((v, i) =>
          <div className='message' key={i}>{v}</div>
        )}
      </div>
      <Input placeholder='Введите команду' action={consoleDispatch}
        blockRef={inputCommand} value={store.state.consoleValue} 
        changeValue={changeValue} />
    </div>
  )
})

const changeValue = (command: string) => store.setPlayerValue(command);
