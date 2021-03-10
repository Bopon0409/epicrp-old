import React, { useState } from 'react'
import ToggleColor from './toggle-color'
import ToggleImg from './toggle-img'

export default function Hair () {
  const [state, setState] = useState({
    beard: { value: 1, valueName: 'beard', title: 'Борода/Усы' },
    colorBeard: {
      value: '',
      valueName: 'colorBeard',
      title: 'Цвет Бороды/Усов'
    },
    hairstyle: { value: 1, valueName: 'hairstyle', title: 'Прическа' },
    colorHairstyle: {
      value: '',
      valueName: 'colorHairstyle',
      title: 'Цвет прически'
    }
  })

  const onValueChange = (value, valueName) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState[valueName].value = value
    setState(newState)
  }

  return (
    <div className='current-block'>
      <ToggleImg item={state.beard} onValueChange={onValueChange} size={30} />
      <ToggleColor
        item={state.colorBeard}
        onValueChange={onValueChange}
        type='hair'
      />
      <ToggleImg
        item={state.hairstyle}
        onValueChange={onValueChange}
        size={30}
      />
      <ToggleColor
        item={state.colorHairstyle}
        onValueChange={onValueChange}
        type='hair'
      />
    </div>
  )
}
