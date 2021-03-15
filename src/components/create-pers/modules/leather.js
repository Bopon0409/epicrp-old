import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/create-pers/leather-store'

import ToggleBar from './toggle-bar'
import Slider from './slider'

export default observer(() => {
  const { state, onValueChange } = store

  return (
    <div className='leather current-block'>
      <ToggleBar item={state.stains} onValueChange={onValueChange} />
      <ToggleBar item={state.age} onValueChange={onValueChange} />
      <ToggleBar item={state.sunDamage} onValueChange={onValueChange} />
      <ToggleBar item={state.freckles} onValueChange={onValueChange} />

      <Slider
        item={state.skinColor}
        onValueChange={onValueChange}
        isColor={true}
      />
    </div>
  )
})
