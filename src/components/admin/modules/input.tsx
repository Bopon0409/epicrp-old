import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'

export interface InputProps {
  placeholder: string
  action: (value: string) => void
}

export const Input = observer((props: InputProps) => {
  const { action, placeholder } = props
  const [value, setValue] = useState('')

  const inputHandler = (event: any) => {
    const { value } = event.target
    if (value.length <= 60) setValue(value)
  }

  const actionHandler = () => {
    action(value)
    setValue('')
  }

  return (
    <div className='input'>
      <input className='input__field' type='text' placeholder={placeholder}
        value={value} onChange={inputHandler} />
      <img src='' alt='' className='input__button' onClick={actionHandler} />
    </div>
  )
})