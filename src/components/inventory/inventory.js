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
  componentDidMount = () => this.checkArmorAndBag()

  state = {
    bagType: 0,
    modal: {
      isActive: false,
      item: {},
      xCord: 0,
      yCord: 0
    },
    userIndicators: {
      food: 50,
      water: 60,
      health: 70
    },
    inventory: [
      {
        idItem: 0,
        idSlot: 0,
        quantity: 3,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: false,
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
        equipmentSlot: false,
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
        equipmentSlot: false,
        name: 'Пулемет',
        description: `Описание пулемета - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 12,
        idSlot: 2,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 201,
        name: 'Шляпа',
        description: `Описание шляпы - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 11,
        idSlot: 3,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 202,
        name: 'Куртка',
        description: `Описание куртки - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 9,
        idSlot: 4,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 203,
        name: 'Футболка',
        description: `Описание футболки - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 5,
        idSlot: 5,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 204,
        name: 'Штаны',
        description: `Описание штанов - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 7,
        idSlot: 6,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 205,
        name: 'Ботинки',
        description: `Описание ботинок - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 10,
        idSlot: 7,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 206,
        armor: 100,
        name: 'Броня',
        description: `Описание брони - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 3,
        idSlot: 8,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 207,
        name: 'Маска',
        description: `Описание маски - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 13,
        idSlot: 9,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 208,
        name: 'Очки',
        description: `Описание очков - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 8,
        idSlot: 10,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 209,
        name: 'Бижутерия',
        description: `Описание бижутерии - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 14,
        idSlot: 11,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 210,
        name: 'Часы',
        description: `Описание часов - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 4,
        idSlot: 12,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 211,
        name: 'Перчатки',
        description: `Описание перчаток - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      },
      {
        idItem: 6,
        idSlot: 13,
        quantity: 1,
        weight: 0.2,
        isFastSlot: false,
        equipmentSlot: 212,
        bag: 2,
        name: 'Сумка',
        description: `Описание сумки - самый важный элемент в инвентаре 
        Без его описания можно было бы считать работу несостоявшейся`
      }
    ]
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
    const { closeInventory } = this.props
    const bagStyle = bagType === 1 ? 'bag-block small-bag-block' : 'bag-block'
    return (
      <>
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
      </>
    )
  }
}
