import React           from 'react'
import { observer }    from 'mobx-react-lite'
import { store }       from '../inventory-store'
import { DragOverlay } from '@dnd-kit/core'

export const Overlay = observer(() => {
  const { dndItem } = store.state
  const idImg = dndItem ? store.getItem(dndItem)?.idImg : ''
  console.log(idImg)
  const imgPath = `./images/items/id${idImg}.png`

  return (
    <DragOverlay dropAnimation={null} className='inventory-overlay'
      adjustScale={false}>
      {dndItem !== null && (
        <img className='overlay-img' src={imgPath} alt='' />
      )}
    </DragOverlay>
  )
})