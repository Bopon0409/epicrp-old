/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

import Slot from './modules/slot'
import Equipment from './modules/equipment'
import ItemModal from './modules/item-modal'

import './scss/inventory.scss'

import Bag from './images/bag.png'

export default class inventory extends Component {
  state = {
    bagType: 2,
    modal: {
      isActive: false,
      item: {},
      xCord: 0,
      yCord: 0
    },
    inventory: [
      {
        idItem: 0,
        idSlot: 0,
        quantity: 3,
        weight: 0.2,
        isFastSlot: false,
        isEquipmentSlot: true,
        name: 'Яблочко',
        description: `Описание яблочка - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 1,
        idSlot: 100,
        quantity: 1,
        weight: 1,
        isFastSlot: true,
        isEquipmentSlot: true,
        name: 'Пистолет',
        description: `Описание пистолета - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 2,
        idSlot: 1,
        quantity: 1,
        weight: 4,
        isFastSlot: true,
        isEquipmentSlot: true,
        name: 'Пулемет',
        description: `Описание пулемета - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      }
    ]
  }

  setModal = (isActive, item, xCord, yCord) => {
    this.setState({ modal: { isActive, item, xCord, yCord } })
  }

  checkSlotOnItem = num => {
    return this.state.inventory.find(item => item.idSlot === num)
  }

  getSlotsInventary = type => {
    switch (type) {
      case 'inventory':
        return this.renderSlots(0, 25)
      case 'fastInventory':
        return this.renderSlots(100, 104)
      case 'bag':
        const { bagType } = this.state
        if (bagType === 0) return null
        else if (bagType === 1) return this.renderSlots(25, 30)
        else if (bagType === 2) return this.renderSlots(25, 35)
    }
  }

  renderSlots = (startId, endId) => {
    const list = []
    for (let i = startId; i < endId; i++) {
      const item = this.checkSlotOnItem(i)
      list.push(
        <Slot
          key={i}
          id={i}
          item={item}
          setModal={this.setModal}
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        />
      )
    }
    return list
  }

  swapSlotItem = (fromSlot, toSlot) => {
    this.setState(({ inventory }) => {
      inventory.forEach(item => {
        const isCoincidence = item.idSlot === fromSlot
        const fastSlotCheck = toSlot < 100 || item.isFastSlot
        const equipmentSlotCheck = toSlot < 200 || item.isEquipmentSlot
        if (isCoincidence && fastSlotCheck && equipmentSlotCheck)
          item.idSlot = toSlot
      })
      return { inventory }
    })
  }

  handleDragStart = data => event => {
    const item = this.checkSlotOnItem(data.id)
    if (item) {
      let fromSlot = JSON.stringify({ id: data.id })
      event.dataTransfer.setData('dragContent', fromSlot)
    } else event.preventDefault()
  }

  handleDragOver = () => event => {
    event.preventDefault()
    return false
  }

  handleDrop = data => event => {
    console.log(data.id)
    event.preventDefault()
    const fromSlot = JSON.parse(event.dataTransfer.getData('dragContent'))
    this.swapSlotItem(fromSlot.id, data.id)
    return false
  }

  render () {
    const { modal, bagType } = this.state
    const bagStyle = bagType === 1 ? 'bag-block small-bag-block' : 'bag-block'
    return (
      <div className='inventory-page'>
        <div className='button-exit'>
          <div className='btn'>ESC</div>
          Закрыть
        </div>

        {modal.isActive ? (
          <ItemModal modal={modal} setModal={this.setModal} />
        ) : null}

        <div className='main-block'>
          <div className='top-panel'>
            <div className='title equipment-title'>Экипировка</div>
            <div className='title inventory-title'>Инвентарь</div>
          </div>

          <div className='equipment'>
            <Equipment
              checkSlotOnItem={this.checkSlotOnItem}
              onDragStart={this.handleDragStart}
              onDragOver={this.handleDragOver}
              onDrop={this.handleDrop}
              setModal={this.setModal}
            />
          </div>

          <div className='inventory'>
            <div className={bagStyle}>{this.getSlotsInventary('bag')}</div>
            <div className='inventory-block'>
              {this.getSlotsInventary('inventory')}
            </div>
            <div className='bag-hint'>
              <img src={Bag} alt='' />
            </div>
            <div className='fast-inventory'>
              {this.getSlotsInventary('fastInventory')}
              <div className='title'>Быстрый доступ</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
