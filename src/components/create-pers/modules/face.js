import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../create-pers-store/face-store'
import Slider from './slider'

export default observer(() => {
  const { state, onValueChange } = store

  const sliderList = []
  for (const item in state) {
    sliderList.push(
      <Slider
        key={state[item].valueName}
        item={state[item]}
        onValueChange={onValueChange}
      />
    )
  }

  return (
    <div className='face current-block'>
      <div className='current-wrap scroll'>{sliderList}</div>
    </div>
  )
})
