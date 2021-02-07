/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Item from './item'

export default function Equipment (props) {
  const { onDragStart, onDragOver, onDrop, checkSlotOnItem, setModal } = props
  const rowNumbers = [1, 2, 3, 3, 2, 1]

  const equipmentSlotList = () => {
    let list = []
    for (let i = 1; i < 7; i++) {
      const id1 = 200 + i
      const id2 = 206 + i

      const item1 = checkSlotOnItem(id1)
      const item2 = checkSlotOnItem(id2)

      const img1 = (
        <img
          className='equipment-plug'
          src={require(`../images/equipment-slot-${i}.png`).default}
        />
      )

      const img2 = (
        <img
          className='equipment-plug'
          src={require(`../images/equipment-slot-${i + 6}.png`).default}
        />
      )

      const containerClass2 = `equipment-slot-container row${rowNumbers[i - 1]}`

      list.push(
        <div key={i} className={containerClass2}>
          <div
            className='equipment-slot'
            onClick={e => setModal(true, item1, e.clientX, e.clientY)}
          >
            <div
              draggable='true'
              onDragStart={onDragStart({ id: id1 })}
              onDragOver={onDragOver({ id: id1 })}
              onDrop={onDrop({ id: id1 })}
            >
              {item1 ? <Item item={item1} /> : img1}
            </div>
          </div>

          <div
            className='equipment-slot'
            onClick={e => setModal(true, item2, e.clientX, e.clientY)}
          >
            <div
              draggable='true'
              onDragStart={onDragStart({ id: id2 })}
              onDragOver={onDragOver({ id: id2 })}
              onDrop={onDrop({ id: id2 })}
            >
              {item2 ? <Item item={item2} /> : img2}
            </div>
          </div>
        </div>
      )
    }
    return list
  }

  return <>{equipmentSlotList()}</>
}
