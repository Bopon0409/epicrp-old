import React, { useEffect, useRef } from 'react'
import { observer }                     from 'mobx-react-lite'
import SendMessageSVG                   from '../images/send.svg'

export interface InputProps {
  placeholder: string
  action: (value: string) => any
  blockRef?: any
  value: string
  changeValue: (value: string) => string
}

export const Input = observer((props: InputProps) => {
  const { action, placeholder, value, changeValue } = props
  let inputRef = useRef<HTMLInputElement>(null);

  const inputHandler = (event: any) => {
    const { value } = event.target
    if (value.length <= 60) changeValue(value);
  }

  const submitHandler = () => {
    action(value)
    changeValue('');
  }

  
  useEffect(() => {
    inputRef.current?.focus();
}, []);


  const keyClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') submitHandler()
  }

  return (
    <div className='input' onKeyUp={keyClick} tabIndex={0}>
      <input className='input__field' type='text' placeholder={placeholder}
        value={value} onChange={inputHandler} ref={inputRef} />
      <div className='input__button' onClick={submitHandler}>
        <img src={SendMessageSVG} alt='' />
      </div>
    </div>
  )
})