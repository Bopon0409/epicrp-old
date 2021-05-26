import React           from 'react'
import { DragOverlay } from '@dnd-kit/core'
import { observer }    from 'mobx-react-lite'
import store           from '../house-store'
import Car             from './car'

export default observer(() => {
  const { roommateDragName, state: { dragId }, carColor, overlayRotate } = store
  return (
    <DragOverlay dropAnimation={null}>
      {dragId !== 0 ? dragId < 300 ?
        <Car color={carColor} type={overlayRotate} /> :
        <div className='roommates__item'>
          <div className='text'>{roommateDragName}</div>
        </div> : null
      }
    </DragOverlay>
  )
})