/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './inventory.scss'

import EquipmentSlot1 from './images/equipment-slot-1.png'
import EquipmentSlot2 from './images/equipment-slot-2.png'
import EquipmentSlot3 from './images/equipment-slot-3.png'
import EquipmentSlot4 from './images/equipment-slot-4.png'
import EquipmentSlot5 from './images/equipment-slot-5.png'
import EquipmentSlot6 from './images/equipment-slot-6.png'
import EquipmentSlot7 from './images/equipment-slot-7.png'
import EquipmentSlot8 from './images/equipment-slot-8.png'
import EquipmentSlot9 from './images/equipment-slot-9.png'
import EquipmentSlot10 from './images/equipment-slot-10.png'
import EquipmentSlot11 from './images/equipment-slot-11.png'
import EquipmentSlot12 from './images/equipment-slot-12.png'
import Bag from './images/bag.png'

export default class inventory extends Component {
  createSlotList = (quantity, type) => {
    const list = []
    for (let i = 0; i < quantity; i++) {
      list.push(<div key={`slote-${type}-${i}`} className='slot'></div>)
    }
    return list
  }

  render () {
    return (
      <div className='inventory-page'>
        <div className='button-exit'>
          <div className='btn'>ESC</div>
          Закрыть
        </div>
        <div className='main-block'>
          <div className='top-panel'>
            <div className='title equipment-title'>Экипировка</div>
            <div className='title inventory-title'>Инвентарь</div>
          </div>
          <div className='equipment'>
            <div className='equipment-slot-container row1'>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot1} />
              </div>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot7} />
              </div>
            </div>
            <div className='equipment-slot-container row2'>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot2} />
              </div>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot8} />
              </div>
            </div>
            <div className='equipment-slot-container row3'>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot3} />
              </div>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot9} />
              </div>
            </div>
            <div className='equipment-slot-container row3'>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot4} />
              </div>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot10} />
              </div>
            </div>
            <div className='equipment-slot-container row2'>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot5} />
              </div>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot11} />
              </div>
            </div>
            <div className='equipment-slot-container row1'>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot6} />
              </div>
              <div className='equipment-slot'>
                <img className='equipment-plug' src={EquipmentSlot12} />
              </div>
            </div>
          </div>
          <div className='inventory'>
            <div className='bag-block'>{this.createSlotList(10, 'bag')}</div>
            <div className='inventory-block'>
              {this.createSlotList(25, 'inventory')}
            </div>
            <div className='bag-hint'>
              <img src={Bag} alt='' />
            </div>
            <div className='fast-inventory'>
              {this.createSlotList(4, 'fast-inventory')}
              <div className='title'>Быстрый доступ</div>
            </div>
          </div>
        </div>
        <div className='bot-panel'></div>
      </div>
    )
  }
}
