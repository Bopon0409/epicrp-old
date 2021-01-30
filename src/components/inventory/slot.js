import Item from './item'

export default function Slot ({
  draggable,
  onDragStart,
  onDragOver,
  onDrop,
  item,
  id
}) {
  return (
    <div className='slot'>
      <div
        // onMouseEnter=''
        // onMouseLeave=''
        className='item-wrapper'
        draggable={draggable}
        onDragStart={onDragStart({ id })}
        onDragOver={onDragOver({ id })}
        onDrop={onDrop({ id })}
      >
        {item ? <Item item={item} /> : null}
      </div>
    </div>
  )
}
