import React, { useCallback, useState } from 'react'
import { observer }                     from 'mobx-react-lite'
import SendMessageSVG                   from '../images/send.svg'

export interface InputProps {
  placeholder: string
  action: (value: string) => any
  blockRef?: any
}

export const Input = observer((props: InputProps) => {
  const { action, placeholder } = props
  const [value, setValue] = useState('')

  const inputHandler = useCallback((event: any) => {
    const { value } = event.target
    if (value.length <= 60) setValue(value)
  }, [value, setValue])

  const submitHandler = () => {
    action(value)
    setValue('')
  }

  const keyClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') submitHandler()
  }

  return (
    <div className='input' onKeyUp={keyClick} tabIndex={0}>
      <input className='input__field' type='text' placeholder={placeholder}
        value={value} onChange={inputHandler} />
      <div className='input__button' onClick={submitHandler}>
        <img src={SendMessageSVG} alt='' />
      </div>
    </div>
  )
})