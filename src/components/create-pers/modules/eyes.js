import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/create-pers/eyes-store'

import ToggleColor from './toggle-color'
import Slider from './slider'

export default observer(() => {
  const { state, onValueChange } = store

  return (
    <div className='eyes current-block'>
      <Slider item={state.eyeSize} onValueChange={onValueChange} />
      <ToggleColor
        item={state.colorEyes}
        onValueChange={onValueChange}
        type='eyes'
      />
    </div>
  )
})
