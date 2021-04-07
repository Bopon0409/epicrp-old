import { observer } from 'mobx-react-lite'
import React from 'react'
import { DragOverlay } from '@dnd-kit/core'
import store from '../../../store/inventory/inventory-store'

export default observer(() => {
  const { drugId } = store.state
  const idItem = store.getItem(drugId)?.idItem
  return (
    <DragOverlay dropAnimation={null}>
      {drugId !== 0 && (
        <img
          style={{ position: 'relative', left: '18px', top: '19px' }}
          src={`./images/inventory/items/id${idItem}.png`}
          alt=''
        />
      )}
    </DragOverlay>
  )
})
