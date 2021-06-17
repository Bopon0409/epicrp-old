import React, {useRef}        from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../admin-store';
import SendMessageSVG from '../images/send.svg';
import { Input } from './input';

export const Console = observer(() => {
  let inputCommand= useRef<HTMLInputElement>(null); // команда
  const ConsoleMessages = store.state.console;
  const SendCommand = () => {
    
  }
  return (
    <div className='console'>
      <div className='messages'>
        {
          ConsoleMessages.map((v, id) => {
            return(
              <div className='message' key={id}>
                {v}
              </div>
            )
          })
        }
      </div>
      <Input placeholder='Введите команду' action='console' blockRef={inputCommand} />
    </div>
  )
})