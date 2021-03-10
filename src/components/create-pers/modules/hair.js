import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/create-pers/hair-store'
import ToggleColor from './toggle-color'
import ToggleImg from './toggle-img'

export default observer(() => {
  const { state, onValueChange } = store

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
})
