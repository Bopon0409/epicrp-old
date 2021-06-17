import React, { useCallback, useState } from 'react'
import { observer }        from 'mobx-react-lite'
import { store } from '../admin-store';
import SendMessageSVG from '../images/send.svg';


export interface InputProps {
  placeholder: string
  action: string
  blockRef?: any 
}

export const Input = observer((props: InputProps) => {
  const { action, placeholder, blockRef = null } = props
  const [value, setValue] = useState('')

  const actionHandler = useCallback(() => {
    if(value.length > 0){
    switch(action){
      case 'console':{
        return;
      }
      case 'chat':{
        return;
      }
    }
  }
    setValue('')
  }, [value, setValue]);

  const inputHandler = useCallback((event: any) => {
    const { value } = event.target
    if (value.length <= 60) setValue(value)
  }, [value, setValue]);
  
  const keyClick = useCallback((e:React.KeyboardEvent<HTMLDivElement>) => {
    if(e.key === 'Enter'){
      actionHandler();
    }
  }, [actionHandler]);

  return (
    <div className='input' onKeyUp={keyClick} tabIndex={0}>
      <input className='input__field' type='text' placeholder={placeholder}
        value={value} onChange={inputHandler} />
      <div className='input__button' onClick={actionHandler}>
        <img src={SendMessageSVG} alt="" />
      </div>
    </div>
  )
})