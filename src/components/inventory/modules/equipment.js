/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import Item from './item'

const EquipmentSlotView = ({ id, item, img, isDrag, setModal }) => {
  const { setNodeRef: setNodeRefDroppable } = useDroppable({ id })
  const {
    attributes,
    listeners,
    setNodeRef: setNodeRefDraggable,
    transform
  } = useDraggable({ id })

  return (
    <div
      className='equipment-slot'
      onClick={e => {
        if (isDrag()) setModal(true, item, e.clientX, e.clientY)
      }}
      ref={setNodeRefDroppable}
    >
      <div
        ref={setNodeRefDraggable}
        style={{ transform: CSS.Translate.toString(transform) }}
        {...listeners}
        {...attributes}
      >
        {item ? <Item item={item} /> : img}
      </div>
    </div>
  )
}

export default function Equipment ({ checkSlotOnItem, setModal, isDrag }) {
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

      const containerClass = `equipment-slot-container row${rowNumbers[i - 1]}`

      list.push(
        <div key={i} className={containerClass}>
          <EquipmentSlotView
            id={id1}
            img={img1}
            item={item1}
            isDrag={isDrag}
            setModal={setModal}
          />
          <EquipmentSlotView
            id={id2}
            img={img2}
            item={item2}
            isDrag={isDrag}
            setModal={setModal}
          />
        </div>
      )
    }
    return list
  }

  return <>{equipmentSlotList()}</>
}
