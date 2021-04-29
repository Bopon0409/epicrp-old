import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../create-pers-store/leather-store'
import ToggleBar from './toggle-bar'

export default observer(() => {
  const { state, onValueChange } = store

  return (
    <div className='leather current-block'>
      <ToggleBar item={state.stains} onValueChange={onValueChange} />
      <ToggleBar item={state.leatherAge} onValueChange={onValueChange} />
      <ToggleBar item={state.sunDamage} onValueChange={onValueChange} />
      <ToggleBar item={state.freckles} onValueChange={onValueChange} />
    </div>
  )
})
