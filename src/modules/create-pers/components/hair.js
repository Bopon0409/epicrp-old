import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../create-pers-store/hair-store'
import ToggleColor from './toggle-color'
import ToggleImg from './toggle-img'
import Slider from './slider'

export default observer(() => {
  const { state, onValueChange } = store

  return (
    <div className='current-block'>
      <Slider
        key={state.eyebrows.valueName}
        item={state.eyebrows}
        onValueChange={onValueChange}
        min={0}
        max={33}
        step={1}
      />
      <ToggleColor
        item={state.colorEyebrows}
        onValueChange={onValueChange}
        type='hair'
      />
      <Slider
        key={state.beard.valueName}
        item={state.beard}
        onValueChange={onValueChange}
        min={0}
        max={28}
        step={1}
      />
      <ToggleColor
        item={state.colorBeard}
        onValueChange={onValueChange}
        type='hair'
      />
      <ToggleImg
        item={state.hairstyle}
        onValueChange={onValueChange}
        type='hairStyle'
      />
      <ToggleColor
        item={state.colorHairstyle}
        onValueChange={onValueChange}
        type='hair'
      />
    </div>
  )
})
