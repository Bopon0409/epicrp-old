import images from '../images/items/itemsImg'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

export default function Item ({ item, id }) {
  const { quantity, weight, idSlot, idItem } = item
  const className = idSlot < 200 ? '' : 'equipment-item'

  const {
    attributes,
    listeners,
    setNodeRef: setNodeRefDraggable,
    transform
  } = useDraggable({ id })

  return (
    <div
      className='item-wrapper'
      ref={setNodeRefDraggable}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...listeners}
      {...attributes}
    >
      <img className={className} src={images[`imgId${idItem}`]} alt='' />

      {idSlot < 200 ? (
        <div className='label-block'>
          <div className='label'>{quantity}</div>
          <div className='label'>{(weight * quantity).toFixed(1)} КГ</div>
        </div>
      ) : null}
    </div>
  )
}
