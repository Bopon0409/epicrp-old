import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../create-pers-store/clothes-store'
import ToggleImg from './toggle-img'
import ToggleColor from './toggle-color'

export default observer(() => {
  const { state, onValueChange } = store

  return (
    <div className='current-block scroll'>
      <ToggleImg
        item={state.shirt}
        onValueChange={onValueChange}
        type='shirts'
      />
      <ToggleColor
        item={state.colorShirt}
        onValueChange={onValueChange}
        type='shirts'
      />
      <ToggleImg
        item={state.pants}
        onValueChange={onValueChange}
        type='pants'
      />
      <ToggleColor
        item={state.colorPaints}
        onValueChange={onValueChange}
        type='pants'
      />
      <ToggleImg
        item={state.shoes}
        onValueChange={onValueChange}
        type='shoes'
      />
      <ToggleColor
        item={state.colorShoes}
        onValueChange={onValueChange}
        type='shoes'
      />
    </div>
  )
})
