import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/create-pers/clothes-store'

import ToggleImg from './toggle-img'
import ToggleColor from './toggle-color'

export default observer(() => {
  const { state, onValueChange } = store

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
})
