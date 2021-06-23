import React, { useEffect, useRef } from 'react'
import { observer }                     from 'mobx-react-lite'
import SendMessageSVG                   from '../images/send.svg'
import { store } from '../admin-store';

const STORAGE = 20;


export interface InputProps {
  placeholder: string
  action: (value: string) => any
  value: string
  changeValue: (value: string) => string
  type: string
  blockRef?: any
}

export const Input = observer((props: InputProps) => {
  const { action, placeholder, value, changeValue, type, blockRef } = props;
  const { localChatMessagesStorage, 
    localConsoleCommandsStorage,
    localPlayersStorage
  } = store.state;
  let inputRef = useRef<HTMLInputElement>(null);

  const inputHandler = (event: any) => {
    const { value } = event.target
    if (value.length <= 60) changeValue(value);
  }

  const submitHandler = () => {
    action(value);
    changeValue('');
    switch (type) {
      case 'chat': store.setMsgNumber(0); break;
      case 'console': store.setCmdNumber(0); break;
      case 'player': store.setPlayerNumber(0); break;
      default: break;
    }

    if(blockRef.current){
      setTimeout(() => {
        blockRef.current.scrollTo({ top: 10000, behavior: 'smooth' })
      }, 50);
    }
  }


  
  useEffect(() => {
    inputRef.current?.focus();
    // blockRef.current.scrollTo(0, 1000);
}, []);


  const keyClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const KEY = e.key;
    switch (KEY) {
      case 'Enter':{
        submitHandler();
        break;
      }

      case 'ArrowUp':{
        if(type === 'chat' 
        && store.state.msgNumber !== STORAGE 
        && localChatMessagesStorage.length)
        {
          const SIZE = localChatMessagesStorage.length
          if(store.state.msgNumber === STORAGE) return;
          if(SIZE - store.state.msgNumber !== 0){
            store.setMsgNumber(store.state.msgNumber + 1);
            const newMsg = localChatMessagesStorage[SIZE - store.state.msgNumber];
            changeValue(newMsg);
          }
        }
        else if(type === 'console' 
        && store.state.cmdNumber !== STORAGE 
        && localConsoleCommandsStorage.length)
        {
          const SIZE = localConsoleCommandsStorage.length;
          if(store.state.cmdNumber === STORAGE) return;
          if(SIZE - store.state.cmdNumber !== 0){
            store.setCmdNumber(store.state.cmdNumber + 1);
            const newCmd = localConsoleCommandsStorage[SIZE - store.state.cmdNumber];
            changeValue(newCmd);
          }
        }
        else if(type === 'player'
        && store.state.playerNumber !== STORAGE
        && localPlayersStorage.length)
        {
          const SIZE = localPlayersStorage.length;
          if(store.state.playerNumber === STORAGE) return;
          if(SIZE - store.state.playerNumber !== 0){
          store.setPlayerNumber(store.state.playerNumber + 1);
          const newPlayer = localPlayersStorage[SIZE - store.state.playerNumber];
          changeValue(newPlayer);
          }
        }
        break;
      }

      case 'ArrowDown':{
        if(type === 'chat' && store.state.msgNumber !== 0 )
        {
          const SIZE = localChatMessagesStorage.length
          if(store.state.msgNumber === 1) {
            changeValue('');
            store.setMsgNumber(0);
            return;
          }
          store.setMsgNumber(store.state.msgNumber - 1);
          const newMsg = localChatMessagesStorage[SIZE - store.state.msgNumber];
          changeValue(newMsg);
        }

        else if(type === 'console' && store.state.cmdNumber !== 0)
        {
          const SIZE = localConsoleCommandsStorage.length;
          if(store.state.cmdNumber === 1) {
            changeValue('');
            store.setCmdNumber(0);
            return;
          }
          store.setCmdNumber(store.state.cmdNumber - 1);
          const newCmd = localConsoleCommandsStorage[SIZE - store.state.cmdNumber];
          changeValue(newCmd);
        }
        else if(type === 'player' && store.state.playerNumber !== 0)
        {
          const SIZE = localPlayersStorage.length;
          if(store.state.playerNumber === 1) {
            changeValue('');
            store.setPlayerNumber(0);
            return;
          }
          store.setPlayerNumber(store.state.playerNumber - 1);
          const newPlayer = localPlayersStorage[SIZE - store.state.playerNumber];
          changeValue(newPlayer);
        }
        break;
      }
      default: return;
    }
  }

  return (
    <div className='input'  tabIndex={0}>
      <input className='input__field' type='text' placeholder={placeholder}
        value={value} onChange={inputHandler} ref={inputRef} onKeyUp={keyClick} />
      <div className='input__button' onClick={submitHandler}>
        <img src={SendMessageSVG} alt='' />
      </div>
    </div>
  )
})