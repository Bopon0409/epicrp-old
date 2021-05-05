import React from 'react'
import { observer } from 'mobx-react-lite'

export default observer(({ size, name, online, color = 'white' }) => {
  const letter = name ? name[0] : ''
  return (
    <div className='icon' style={{ width: size, height: size }}>
      <div className='icon__letter' style={{ color }}>
        {letter}
      </div>
      {online && <div className='icon__online' />}
    </div>
  )
})
