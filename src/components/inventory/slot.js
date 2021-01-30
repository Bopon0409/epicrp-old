import Item from './item'

export default function Slot ({
  setModal,
  onDragStart,
  onDragOver,
  onDrop,
  item,
  id
}) {
  return (
    <div className='slot'>
      <div
        onMouseEnter={event => setModal(true, event.clientX, event.clientY)}
        onMouseLeave={() => setModal(false, 0, 0)}
        className='item-wrapper'
        draggable='true'
        onDragStart={onDragStart({ id })}
        onDragOver={onDragOver({ id })}
        onDrop={onDrop({ id })}
      >
        {item ? <Item item={item} /> : null}
      </div>
    </div>
  )
}
