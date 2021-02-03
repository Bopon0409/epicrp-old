import Item from './item'

export default function Slot ({
  setModal,
  onDragStart,
  onDragOver,
  onDrop,
  item,
  id,
  modalActive
}) {
  return (
    <div
      className={modalActive ? 'slot slot-no-hover' : 'slot'}
      onClick={event => setModal(true, item, event.clientX, event.clientY)}
    >
      <div
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
