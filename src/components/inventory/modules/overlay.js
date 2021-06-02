import { observer }    from 'mobx-react-lite'
import React           from 'react'
import { DragOverlay } from '@dnd-kit/core'
import store           from '../inventory-store'

export default observer(() => {
  const { dragId } = store.state
  const idItem = store.getItem(dragId)?.idItem
  return (
    <DragOverlay dropAnimation={null}>
      {dragId !== 0 ? (
        <img
          style={{ position: 'relative', left: '18px', top: '19px' }}
          src={`./images/items/id${idItem}.png`}
          alt=''
        />
      ) : null}
    </DragOverlay>
  )
})
