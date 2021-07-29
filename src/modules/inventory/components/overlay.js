import { observer }    from 'mobx-react-lite'
import React           from 'react'
import { DragOverlay } from '@dnd-kit/core'
import store           from '../inventory-store'

export default observer(() => {
  const { dragId } = store.state
  const imgPath = `./images/items/id${store.getItem(dragId)?.idItem}.png`
  const classes = 'item__img item__img--overlay'

  return (
    <DragOverlay dropAnimation={null} className='inventory-overlay' adjustScale={false}>
      {dragId !== 0 && (<img className={classes} src={imgPath} alt='' />)}
    </DragOverlay>
  )
})
