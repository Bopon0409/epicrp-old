import React, { useCallback, useState, useEffect, useRef } from 'react'
import { observer }                     from 'mobx-react-lite'
import SendMessageSVG                   from '../images/send.svg'

export interface InputProps {
  placeholder: string
  action: (value: string) => any
  blockRef?: any
}

export const Input = observer((props: InputProps) => {
  const { action, placeholder } = props
  const [value, setValue] = useState('');
  let inputRef = useRef<HTMLInputElement>(null);

  const inputHandler = useCallback((event: any) => {
    const { value } = event.target
    if (value.length <= 60) setValue(value)
  }, [setValue])

  const submitHandler = () => {
    action(value)
    setValue('')
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