import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import { observer } from 'mobx-react-lite'
import store from '../../../store/inventory/inventory-store'

let timer

export default observer(({ id, item }) => {
  // DnD objects
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })
  const style = { transform: CSS.Translate.toString(transform) }

  const { quantity, weight, idItem } = item
  const { drugId } = store.state

  const weightView = item.bag
    ? store.getBagWeight().toFixed(1)
    : (quantity * weight).toFixed(1)

  const onClickHandler = e => {
    clearTimeout(timer)
    if (e.detail === 1)
      timer = setTimeout(() => {
        drugId === 0 && store.setModal(true, item, e.clientX, e.clientY)
      }, 200)
    else if (e.detail === 2) store.useItem(id)
  }

  return (
    <div
      className={drugId === 0 ? 'item item_hover' : 'item'}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      onClick={onClickHandler}
    >
      <img src={`./images/inventory/items/id${idItem}.png`} alt='' />
      {drugId !== id && (
        <div className='item__label-container'>
          <div className='item__label-element'>{quantity}</div>
          <div className='item__label-element'>{weightView}кг</div>
        </div>
      )}
    </div>
  )
})

// import React from 'react'
// import Draggable from './draggable'
// import { observer } from 'mobx-react-lite'
// import store from '../../../store/inventory/inventory-store'

// let timer

// export default observer(({ id, item }) => {
//   // DnD objects

//   const { quantity, weight, idItem } = item
//   const { drugId } = store.state

//   const weightView = item.bag
//     ? store.getBagWeight().toFixed(1)
//     : (quantity * weight).toFixed(1)

//   const onClickHandler = e => {
//     clearTimeout(timer)
//     if (e.detail === 1)
//       timer = setTimeout(() => {
//         drugId === 0 && store.setModal(true, item, e.clientX, e.clientY)
//       }, 200)
//     else if (e.detail === 2) store.useItem(id)
//   }

//   return (
//     <Draggable id={id}>
//       <div
//         className={drugId === 0 ? 'item item_hover' : 'item'}
//         onClick={onClickHandler}
//       >
//         <img src={`./images/inventory/items/id${idItem}.png`} alt='' />
//         {drugId !== id && (
//           <div className='item__label-container'>
//             <div className='item__label-element'>{quantity}</div>
//             <div className='item__label-element'>{weightView}кг</div>
//           </div>
//         )}
//       </div>
//     </Draggable>
//   )
// })
