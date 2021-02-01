/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Item from './item'

import EquipmentSlot1 from '../images/equipment-slot-1.png'
import EquipmentSlot2 from '../images/equipment-slot-2.png'
import EquipmentSlot3 from '../images/equipment-slot-3.png'
import EquipmentSlot4 from '../images/equipment-slot-4.png'
import EquipmentSlot5 from '../images/equipment-slot-5.png'
import EquipmentSlot6 from '../images/equipment-slot-6.png'
import EquipmentSlot7 from '../images/equipment-slot-7.png'
import EquipmentSlot8 from '../images/equipment-slot-8.png'
import EquipmentSlot9 from '../images/equipment-slot-9.png'
import EquipmentSlot10 from '../images/equipment-slot-10.png'
import EquipmentSlot11 from '../images/equipment-slot-11.png'
import EquipmentSlot12 from '../images/equipment-slot-12.png'

export default class Equipment extends Component {
  rowNumbers = [1, 2, 3, 3, 2, 1]

  images = {
    EquipmentSlot1,
    EquipmentSlot2,
    EquipmentSlot3,
    EquipmentSlot4,
    EquipmentSlot5,
    EquipmentSlot6,
    EquipmentSlot7,
    EquipmentSlot8,
    EquipmentSlot9,
    EquipmentSlot10,
    EquipmentSlot11,
    EquipmentSlot12
  }

  equipmentSlotList = () => {
    const { onDragStart, onDragOver, onDrop, checkSlotOnItem } = this.props
    let list = []
    for (let i = 1; i < 7; i++) {
      const id1 = 200 + i
      const id2 = 206 + i

      const item1 = checkSlotOnItem(id1)
      const item2 = checkSlotOnItem(id2)

      list.push(
        <div
          key={i}
          className={`equipment-slot-container row${this.rowNumbers[i - 1]}`}
        >
          <div
            className='equipment-slot'
            draggable='true'
            onDragStart={onDragStart({ id: id1 })}
            onDragOver={onDragOver({ id: id1 })}
            onDrop={onDrop({ id: id1 })}
          >
            {item1 ? (
              <Item item={item1}/>
            ) : (
              <img
                className='equipment-plug'
                src={this.images[`EquipmentSlot${i}`]}
              />
            )}
          </div>
          <div
            className='equipment-slot'
            draggable='true'
            onDragStart={onDragStart({ id: id2 })}
            onDragOver={onDragOver({ id: id2 })}
            onDrop={onDrop({ id: id2 })}
          >
            {item2 ? (
              <Item item={item2}/>
            ) : (
              <img
                className='equipment-plug'
                src={this.images[`EquipmentSlot${i + 6}`]}
              />
            )}
          </div>
        </div>
      )
    }
    return list
  }

  render () {
    return <>{this.equipmentSlotList()}</>
  }
}
