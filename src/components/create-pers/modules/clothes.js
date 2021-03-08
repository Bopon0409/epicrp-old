import React, { useState } from 'react'
import ToggleImg from './toggle-img'
import ToggleColor from './toggle-color'

export default function Сlothes () {
  const [state, setState] = useState({
    shirt: { value: 1, valueName: 'shirt', title: 'Майка' },
    colorShirt: { value: 1, valueName: 'colorShirt', title: 'Цвет майки' },
    pants: { value: 1, valueName: 'pants', title: 'Штаны' },
    colorPaints: { value: 1, valueName: 'colorPaints', title: 'Цвет штанов' },
    shoes: { value: 1, valueName: 'shoes', title: 'Обувь' },
    colorShoes: { value: 1, valueName: 'colorShoes', title: 'Цвет обуви' }
  })

  const onValueChange = (value, valueName) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState[valueName].value = value
    setState(newState)
  }

  return (
    <div className='current-block skroll'>
      <ToggleImg item={state.shirt} onValueChange={onValueChange} size={6} />
      <ToggleColor item={state.colorShirt} onValueChange={onValueChange} />
      <ToggleImg item={state.pants} onValueChange={onValueChange} size={6} />
      <ToggleColor item={state.colorPaints} onValueChange={onValueChange} />
      <ToggleImg item={state.shoes} onValueChange={onValueChange} size={6} />
      <ToggleColor item={state.colorShoes} onValueChange={onValueChange} />
    </div>
  )
}
