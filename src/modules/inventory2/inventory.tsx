import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './inventory-store'
import { Indicators }       from './components/indicators'
import './inventory.scss'

export const Inventory2 = observer(() => {

  useEffect(() => {
    const { EventManager: em } = window
    const {
      addItem, addItems, setItem, removeItem, moveItem, clearData, clearAllData,
      setPage, setTrunk, setIndicators, setHotKeys, setMaxWeight, removeItems,
      setButtonReady2, setTradeMoney2, setTradeMaxMoney, setWarehouse
    } = store

    em.addHandler('inventory.item.add', addItem)
    em.addHandler('inventory.item.add-many', addItems)
    em.addHandler('inventory.item.set', setItem)
    em.addHandler('inventory.item.move', moveItem)
    em.addHandler('inventory.item.remove', removeItem)
    em.addHandler('inventory.item.remove-many', removeItems)
    em.addHandler('inventory.page', setPage)
    em.addHandler('inventory.trunk', setTrunk)
    em.addHandler('inventory.warehouse', setWarehouse)
    em.addHandler('inventory.indicators', setIndicators)
    em.addHandler('inventory.hotkeys', setHotKeys)
    em.addHandler('inventory.max-weight', setMaxWeight)
    em.addHandler('inventory.clear', clearData)
    em.addHandler('inventory.clear-all', clearAllData)
    em.addHandler('inventory.trade.ready2', setButtonReady2)
    em.addHandler('inventory.trade.money2', setTradeMoney2)
    em.addHandler('inventory.trade.max-money', setTradeMaxMoney)

    return () => {
      em.removeHandler('inventory.item.add', addItem)
      em.removeHandler('inventory.item.add-many', addItems)
      em.removeHandler('inventory.item.set', setItem)
      em.removeHandler('inventory.item.move', moveItem)
      em.removeHandler('inventory.item.remove', removeItem)
      em.removeHandler('inventory.item.remove-many', removeItems)
      em.removeHandler('inventory.page', setPage)
      em.removeHandler('inventory.trunk', setTrunk)
      em.removeHandler('inventory.warehouse', setWarehouse)
      em.removeHandler('inventory.indicators', setIndicators)
      em.removeHandler('inventory.hotkeys', setHotKeys)
      em.removeHandler('inventory.max-weight', setMaxWeight)
      em.removeHandler('inventory.clear', clearData)
      em.removeHandler('inventory.clear-all', clearAllData)
      em.removeHandler('inventory.trade.ready2', setButtonReady2)
      em.removeHandler('inventory.trade.money2', setTradeMoney2)
      em.removeHandler('inventory.trade.max-money', setTradeMaxMoney)
    }
  })

  return (
    <div className='inventory'>
      <Indicators />
    </div>
  )
})