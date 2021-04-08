import Item from './item'
import { useDroppable } from '@dnd-kit/core'

export default function Slot ({ setModal, item, id, isDrag }) {
  const { setNodeRef: setNodeRefDroppable } = useDroppable({ id })

  return (
    <div
      className={isDrag ? 'slot' : 'slot slot-hover'}
      onClick={e => {
        if (isDrag) setModal(true, item, e.clientX, e.clientY)
      }}
      ref={setNodeRefDroppable}
    >
      {item ? <Item item={item} id={id} /> : null}
    </div>
  )
}
