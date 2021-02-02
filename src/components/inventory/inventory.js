/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

import Slot from './modules/slot'
import Equipment from './modules/equipment'
import ItemModal from './modules/item-modal'
import BottomPanel from './modules/bottom-panel'
import WeightPanel from './modules/weight-panel'

import './scss/inventory.scss'

import Bag from './images/bag.png'

export default class inventory extends Component {
  state = {
    bagType: 0,
    modal: {
      isActive: false,
      item: {},
      xCord: 0,
      yCord: 0
    },
    userIndicators: {
      food: 0,
      water: 0,
      health: 0,
      armor: 0
    },
    inventory: []
  }

  componentDidMount = () => {
    this.checkArmorAndBag()

    window.EventManager.addHandler(
      'setInventaryData',
      this.setInventaryData.bind(this)
    )
  }

  setInventaryData = ({ inventory, userIndicators }) => {
    this.setState({ inventory, userIndicators })
  }

  checkArmorAndBag = () => {
    this.setState(({ inventory, userIndicators }) => {
      let bagType = 0
      userIndicators.armor = 0
      inventory.forEach(item => {
        if (item.bag && item.idSlot === 212) bagType = item.bag
        if (item.armor && item.idSlot === 206) userIndicators.armor = item.armor
      })
      return { bagType, userIndicators }
    })
  }

  getTotalWeight = () => {
    const { inventory, bagType } = this.state
    let totalWeight = 0
    inventory.forEach(item => {
      totalWeight += item.weight
    })
    totalWeight = totalWeight.toFixed(1)

    switch (bagType) {
      case 0:
        return { totalWeight, maxWeight: 10 }
      case 1:
        return { totalWeight, maxWeight: 15 }
      case 2:
        return { totalWeight, maxWeight: 20 }
      case 3:
        return { totalWeight, maxWeight: 25 }
    }
  }

  setModal = (isActive, item, xCord, yCord) => {
    this.setState({ modal: { isActive, item, xCord, yCord } })
  }

  checkSlotOnItem = idSlot => {
    return this.state.inventory.find(item => item.idSlot === idSlot)
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

  fastItemCheck = (item, slot) => !item.isFastSlot && slot >= 100 && slot <= 103

  equipmentSlotCheck = (item, slot) => {
    if (slot >= 201 && slot <= 212) {
      return !(item.equipmentSlot === slot)
    } else return false
  }

  swapSlotItem = (fromSlot, toSlot) => {
    const item1 = this.checkSlotOnItem(fromSlot)
    const item2 = this.checkSlotOnItem(toSlot)

    if (
      this.fastItemCheck(item1, toSlot) ||
      this.equipmentSlotCheck(item1, toSlot)
    )
      return
    if (item2) {
      if (
        this.fastItemCheck(item2, fromSlot) ||
        this.equipmentSlotCheck(item2, fromSlot)
      )
        return
    }

    this.setState(({ inventory }) => {
      inventory.forEach(item => {
        if (item2) {
          if (item.idSlot === item1.idSlot) item.idSlot = toSlot
          if (item.idSlot === item2.idSlot) item.idSlot = fromSlot
        } else {
          if (item.idSlot === item1.idSlot) item.idSlot = toSlot
        }
      })
      return { inventory }
    })

    this.checkArmorAndBag()
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
    event.preventDefault()
    const fromSlot = JSON.parse(event.dataTransfer.getData('dragContent'))
    this.swapSlotItem(fromSlot.id, data.id)
    return false
  }

  render () {
    const { modal, bagType, userIndicators } = this.state
    const { closeInventory, isInventoryActive } = this.props
    const bagStyle = bagType === 1 ? 'bag-block small-bag-block' : 'bag-block'
    return (
      <div
        style={isInventoryActive ? { display: 'block' } : { display: 'none' }}
      >
        <div className='blackout'></div>
        <div className='inventory-page'>
          <div className='button-exit' onClick={() => closeInventory()}>
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

          <BottomPanel userIndicators={userIndicators} />

          <WeightPanel weight={this.getTotalWeight()} />
        </div>
      </div>
    )
  }
}
