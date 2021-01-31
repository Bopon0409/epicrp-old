/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

import Slot from './slot'
import Equipment from './equipment'
import ItemModal from './item-modal'
import './inventory.scss'

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
        isFastSlot: true,
        name: 'Яблочко',
        description: `Описание яблочка - самый важный элемент в инвентаре 
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
        const isCoincidence = item.idSlot === fromSlot.id
        const fastSlotCheck = toSlot.id < 100 || item.isFastSlot
        if (isCoincidence && fastSlotCheck) item.idSlot = toSlot.id
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
    const item = this.checkSlotOnItem(data.id)
    // Проверка на наличие предмета при перемезении
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
    event.preventDefault()

    const fromSlot = JSON.parse(event.dataTransfer.getData('dragContent'))
    const toSlot = { id: data.id }

    this.swapSlotItem(fromSlot, toSlot)
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
            <Equipment />
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
        <div className='bot-panel'></div>
      </div>
    )
  }
}
