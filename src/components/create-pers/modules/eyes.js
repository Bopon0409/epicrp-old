import React, { useState } from 'react'
import ToggleBar from './toggle-bar'
import ToggleColor from './toggle-color'

export default function Eyes () {
  const [state, setState] = useState({
    type: { value: 1, valueName: 'type', title: 'Вариант глаз' },
    color: { value: 1, valueName: 'color', title: 'Цвет глаз' }
  })

  const onValueChange = (value, valueName) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState[valueName].value = value
    setState(newState)
  }

  return (
    <div className='eyes current-block'>
      <ToggleBar item={state.type} onValueChange={onValueChange} />
      <ToggleColor
        item={state.color}
        onValueChange={onValueChange}
        type='eyes'
      />
    </div>
  )
}
