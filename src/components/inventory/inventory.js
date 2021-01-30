/* eslint-disable default-case */
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

function Slot ({ draggable, onDragStart, onDragOver, onDrop, isItem, id }) {
  return (
    <div
      className='slot'
      onDragStart={onDragStart({ id })}
      onDragOver={onDragOver({ id })}
      onDrop={onDrop({ id })}
    >
      <div
        draggable={draggable}
        onDragStart={onDragStart({ id })}
        onDragOver={onDragOver({ id })}
        onDrop={onDrop({ id })}
      >
        {isItem ? 'item' : null}
      </div>
    </div>
  )
}

export default class inventory extends Component {
  state = {
    equipment: [],
    inventory: [
      {
        idItem: 0,
        idSlot: 0,
        quantity: 1,
        description: `Описание яблочка - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      }
    ],
    fastInventory: []
  }

  checkSlotOnItem = num => {
    return this.state.inventory.find(item => item.idSlot === num)
  }

  renderInventory = (quantity) => {
    const {
      checkSlotOnItem,
      handleDragStart,
      handleDragOver,
      handleDrop
    } = this
    const list = []
    for (let i = 0; i < quantity; i++) {
      const key = `slote-inventory-${i}`
      const item = checkSlotOnItem(i)
      list.push(
        <Slot
          isItem={Boolean(item)}
          key={key}
          id={i}
          item={item}
          draggable='true'
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      )
    }
    return list
  }

  swapSlotItem = (fromSlot, toSlot) => {
    this.setState(({ inventory }) => {
      inventory.forEach(item => {
        if (item.idSlot === fromSlot.id) item.idSlot = toSlot.id
      })

      return { inventory }
    })
  }

  renderSlotList = (quantity, type) => {
    const list = []
    for (let i = 0; i < quantity; i++) {
      const key = `slote-${type}-${i}`
      list.push(<div key={key} className='slot'></div>)
    }
    return list
  }

  handleDragStart = data => event => {
    let fromSlot = JSON.stringify({ id: data.id })
    event.dataTransfer.setData('dragContent', fromSlot)
  }

  handleDragOver = () => event => {
    event.preventDefault()
    return false
  }

  handleDrop = data => event => {
    event.preventDefault()

    const fromSlot = JSON.parse(event.dataTransfer.getData('dragContent'))
    const toSlot = { id: data.id }

    this.swapSlotItem(fromSlot, toSlot)
    return false
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
            <div className='bag-block'>{this.renderSlotList(10, 'bag')}</div>
            <div className='inventory-block'>{this.renderInventory(25)}</div>
            <div className='bag-hint'>
              <img src={Bag} alt='' />
            </div>
            <div className='fast-inventory'>
              {this.renderSlotList(4, 'fast-inventory')}
              <div className='title'>Быстрый доступ</div>
            </div>
          </div>
        </div>
        <div className='bot-panel'></div>
      </div>
    )
  }
}
