import React from 'react'
import { DragOverlay } from '@dnd-kit/core'
import { observer } from 'mobx-react-lite'
import store from '../house-store'
import Car from './car'

export default observer(() => {
  const {
    overlayRoommateName, state: { dragId }, overlayCarColor, overlayRotate
  } = store
  return (
    <DragOverlay dropAnimation={null}>
      {dragId !== 0 ? dragId < 300 ? (
        <Car color={overlayCarColor} type={overlayRotate} />
      ) : (
        <div className='roommates__item'>
          <div className='text'>{overlayRoommateName}</div>
        </div>) : null
      }
    </DragOverlay>
  )
})