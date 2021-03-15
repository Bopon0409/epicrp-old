import Item from './item'
import { useDroppable } from '@dnd-kit/core'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

export default function Slot ({ setModal, item, id, isDrag }) {
  const { setNodeRef: setNodeRefDroppable } = useDroppable({ id })
  const {
    attributes,
    listeners,
    setNodeRef: setNodeRefDraggable,
    transform
  } = useDraggable({ id })
  return (
    <div
      className={isDrag ? 'slot' : 'slot slot-hover'}
      onClick={e => {
        if (isDrag) setModal(true, item, e.clientX, e.clientY)
      }}
      ref={setNodeRefDroppable}
    >
      <div
        className='item-wrapper'
        ref={setNodeRefDraggable}
        style={{ transform: CSS.Translate.toString(transform) }}
        {...listeners}
        {...attributes}
      >
        {item ? <Item item={item} /> : null}
      </div>
    </div>
  )
}
