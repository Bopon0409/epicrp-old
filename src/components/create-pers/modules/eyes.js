import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/create-pers/eyes-store'

import ToggleBar from './toggle-bar'
import ToggleColor from './toggle-color'

export default observer(() => {
  const { state, onValueChange } = store

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
})
