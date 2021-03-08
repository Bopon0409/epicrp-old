import React, { useState } from 'react'
import ToggleBar from './toggle-bar'
import Slider from './slider'

export default function Leather () {
  const [state, setState] = useState({
    stains: { value: 1, valueName: 'stains', title: 'Пятна' },
    age: { value: 1, valueName: 'age', title: 'Возраст' },
    sunDamage: { value: 1, valueName: 'sunDamage', title: 'Урон от солнца' },
    freckles: { value: 1, valueName: 'freckles', title: 'Веснушки' },
    color: { value: 50, valueName: 'color', title: 'Цвет кожи' }
  })

  const onValueChange = (value, valueName) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState[valueName].value = value
    setState(newState)
  }

  return (
    <div className='leather current-block'>
      <ToggleBar item={state.stains} onValueChange={onValueChange} />
      <ToggleBar item={state.age} onValueChange={onValueChange} />
      <ToggleBar item={state.sunDamage} onValueChange={onValueChange} />
      <ToggleBar item={state.freckles} onValueChange={onValueChange} />

      <Slider item={state.color} onValueChange={onValueChange} isColor={true} />
    </div>
  )
}
