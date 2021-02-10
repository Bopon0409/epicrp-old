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

export default class Inventory extends Component {
  state = {
    active: false,
    bagType: 0,
    modal: {
      isActive: false,
      item: {},
      xCord: 0,
      yCord: 0
    },
    userIndicators: {
      food: 100,
      water: 100,
      health: 100,
      armor: 0
    },
    inventory: []
  }

  componentDidMount = () => {
    this.checkArmorAndBag()

    window.EventManager.addHandler(
      'pushInventaryDataToFront',
      this.setInventaryData.bind(this)
    )
    window.EventManager.addHandler(
      'openInventory',
      this.openInventory.bind(this)
    )
    window.EventManager.addHandler(
      'closeInventory',
      this.closeInventory.bind(this)
    )
  }

  openInventory = () => this.setState({ active: true })

  closeInventory = () => this.setState({ active: false })

  setInventaryData = inventory => {
    inventory.forEach(item => {
      if (item.equipmentSlot === 200) item.equipmentSlot = false
    })
    this.setState({ inventory })
  }

  pushInventoryDataToClient = inventory => {
    inventory.forEach(item => {
      if (!item.equipmentSlot) item.equipmentSlot = 200
    })
    console.log(inventory)
    const jsonData = JSON.stringify(inventory)
    if (window.mp) window.mp.trigger('pushInventoryDataToClient', jsonData)
    console.log('pushInventoryDataToClient')
  }

  userSeparateInventaryItem = (idSlot, quantity) => {
    this.setState(({ inventory }) => {
      let newItem = {}
      inventory.forEach(item => {
        if (item.idSlot === idSlot) {
          item.quantity -= quantity
          Object.assign(newItem, item)
        }
      })

      newItem.quantity = quantity
      for (let i = 0; i < 25; i++) {
        if (!this.checkSlotOnItem(i)) {
          newItem.idSlot = i
          break
        }
      }

      inventory.push(newItem)
      this.pushInventoryDataToClient(inventory)
      return { inventory }
    })
  }

  userDeleteInventaryItem = idSlot => {
    this.setState(({ inventory }) => {
      const newInventary = inventory.filter(item => item.idSlot !== idSlot)
      this.pushInventoryDataToClient(newInventary)
      return { inventory: newInventary }
    })
  }

  userUseInventaryItem = idSlot => {
    const { equipmentSlot, idItem, isFastSlot } = this.checkSlotOnItem(idSlot)
    if (equipmentSlot && idSlot !== equipmentSlot) {
      this.swapItems(idSlot, equipmentSlot)
    } else if (isFastSlot) {
      if (idSlot >= 100 && idSlot <= 103) return
      for (let i = 100; i < 104; i++) {
        if (!this.checkSlotOnItem(i)) {
          this.swapItems(idSlot, i)
          break
        }
      }
    } else if (!equipmentSlot && !isFastSlot) {
      this.setState(({ inventory }) => {
        inventory.forEach((item, i, arr) => {
          if (item.idSlot === idSlot)
            item.quantity > 1 ? (item.quantity -= 1) : arr.splice(i, 1)
        })
        return { inventory }
      })
      if (window.mp) window.mp.trigger('userUseInventaryItem', idItem)
      console.log('userUseInventaryItem')
    }
  }

  checkBagWeight = () => {
    this.setState(({ inventory }) => {
      let weight = 0
      inventory.forEach(item => {
        if (item.idSlot >= 25 && item.idSlot <= 34) weight += item.weight
      })
      inventory.forEach(item => {
        if (item.bag) item.weight = Number((0.2 + weight).toFixed(1))
      })
    })
  }

  // Проверка инвентаря на броню и сумку

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

  // Проверка общего веса инвентаря и максимального веса

  getTotalWeight = () => {
    const { inventory } = this.state
    let totalWeight = 0
    let bagType = 0
    inventory.forEach(item => {
      if (item.bag) bagType = item.bag
      const { equipmentSlot, idSlot } = item
      if (equipmentSlot) {
        if (equipmentSlot === idSlot && equipmentSlot !== 212) return
      }
      if (idSlot >= 25 && idSlot <= 34) return
      totalWeight += item.weight * item.quantity
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

  // Установка значений модального окна (открытие/закрытие)

  setModal = (isActive, item, xCord, yCord) => {
    this.setState({ modal: { isActive, item, xCord, yCord } })
  }

  // Проверка слота на наличие предмета в нём

  checkSlotOnItem = idSlot => {
    return this.state.inventory.find(item => item.idSlot === idSlot)
  }

  // Создание набора слотов для инвентаря

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

  // Отрисовка сетки предметов

  renderSlots = (startId, endId) => {
    const list = []
    for (let i = startId; i < endId; i++) {
      const item = this.checkSlotOnItem(i)
      list.push(
        <Slot
          key={i}
          id={i}
          item={item}
          modalActive={this.state.modal.isActive}
          setModal={this.setModal}
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        />
      )
    }
    return list
  }

  // Проеверка предмета на возможность быстрого доступа

  fastItemCheck = (item, slot) => !item.isFastSlot && slot >= 100 && slot <= 103

  // Проверка предмета на возможность надевания

  equipmentSlotCheck = (item, slot) => {
    if (slot >= 201 && slot <= 212) {
      return !(item.equipmentSlot === slot)
    } else return false
  }

  // Перемещение предметов

  swapItems = (fromSlot, toSlot) => {
    const item1 = this.checkSlotOnItem(fromSlot)
    const item2 = this.checkSlotOnItem(toSlot)

    // Проверки на возможность перемещения предметов в быстрый слот/экиперовку
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

    // Проверка на перемещение сумки в сумку
    if (item1.bag) {
      if (toSlot >= 25 && toSlot <= 34) return
    }
    if (item2) {
      if (item2.bag) {
        if (fromSlot >= 25 && fromSlot <= 34) return
      }
    }

    // Проверка на стак предметов
    if (item2) {
      if (item1.idItem === item2.idItem) {
        this.setState(({ inventory }) => {
          let newItem = {}
          const newInventary = inventory.filter(
            item => item.idItem !== item1.idItem
          )
          newItem = Object.assign(newItem, item2)
          newItem.quantity = item1.quantity + item2.quantity
          newInventary.push(newItem)
          this.pushInventoryDataToClient(newInventary)
          return { inventory: newInventary }
        })
        return
      }
    }

    // Проверка на надевание (для отправки на сервер)

    if (toSlot >= 100) {
      if (window.mp) window.mp.trigger('userEquippedItem', item1.idItem)
      console.log('userEquippedItem')
    }
    if (item2) {
      if (fromSlot >= 100) {
        if (window.mp) window.mp.trigger('userEquippedItem', item1.idItem)
        console.log('userEquippedItem')
      }
    }

    // Перемещение предметов
    this.setState(({ inventory }) => {
      inventory.forEach(item => {
        if (item2) {
          if (item.idSlot === item1.idSlot) item.idSlot = toSlot
          if (item.idSlot === item2.idSlot) item2.idSlot = fromSlot
        } else {
          if (item.idSlot === item1.idSlot) item.idSlot = toSlot
        }
      })

      this.pushInventoryDataToClient(inventory)
      return { inventory }
    })

    this.checkArmorAndBag()
    this.checkBagWeight()
  }

  // Drag'n'Drop Логика

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
    this.swapItems(fromSlot.id, data.id)
    return false
  }

  render () {
    const { modal, bagType, userIndicators, active } = this.state

    const bagStyle = bagType === 1 ? 'bag-block small-bag-block' : 'bag-block'
    const inventoryStyle = active ? { display: 'block' } : { display: 'none' }

    const modalView = (
      <ItemModal
        modal={modal}
        setModal={this.setModal}
        userUseInventaryItem={this.userUseInventaryItem}
        userDeleteInventaryItem={this.userDeleteInventaryItem}
        userSeparateInventaryItem={this.userSeparateInventaryItem}
      />
    )

    return (
      <div style={inventoryStyle}>
        <div className='blackout'></div>
        <div className='inventory-page'>
          <div className='button-exit'>
            <div className='btn'>ESC</div>
            Закрыть
          </div>

          {modal.isActive ? modalView : null}

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
