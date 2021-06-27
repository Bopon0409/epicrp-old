import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { store } from './business-stats-store'
// import { MenuBlocks } from './constants'
import './business-stats.scss'
import cn from 'classnames'

import { Statistics } from './components/statistics';
import { Warehouse } from './components/warehouse';
import { Products } from './components/products';

import { Advance } from './components/advance';
import { Staff } from './components/staff'

export const BusinessStats = observer(() => {
  const MenuBlocks = store.state.stats?.businessName[0] === "АВТОСАЛОН" ? [
    'Статистика', 'Склад', 'Товары', 'Сотрудники', 'Улучшения'
  ] : ['Статистика', 'Склад', 'Товары', 'Улучшения']
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setStats, setWarehouse, 
    setProductsItems, setAdvance, setProductsIrlItems, warehouseClearData,
   setStaff} = store
    em.addHandler('business-stats.active', setActive);
    em.addHandler('business-stats.stats', setStats);
    em.addHandler('business-stats.warehouse', setWarehouse);
    em.addHandler('business-stats.products-items', setProductsItems);
    em.addHandler('business-stats.products-irl-items', setProductsIrlItems);
    em.addHandler('business-stats.advance', setAdvance);
    em.addHandler('business-stats.warehouse-clearData', warehouseClearData);
    em.addHandler('business-stats.staff', setStaff);
    console.log(store.state.products)
    
    return () => {
      em.removeHandler('business-stats.active', setActive);
      em.removeHandler('business-stats.stats', setStats);
      em.removeHandler('business-stats.warehouse', setWarehouse);
      em.removeHandler('business-stats.products-items', setProductsItems);
      em.removeHandler('business-stats.advance', setAdvance);
      em.removeHandler('business-stats.products-irl-items', setProductsIrlItems);
    
      em.removeHandler('business-stats.warehouse-clearData', warehouseClearData);
      em.removeHandler('business-stats.staff', setStaff);}
  }, [])

  // Смена блока по нажатию
  const makeNextBlockActive = () => {
    if (store.state.activeBlock < MenuBlocks.length - 1) {
      store.setActiveBlock(store.state.activeBlock + 1)
    }
  }
  const makePreviousBlockActive = () => {
    if (store.state.activeBlock > 0) {
      store.setActiveBlock(store.state.activeBlock - 1)
    }
  }

  const keyClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const KeyToLowwerCase = e.key.toLocaleLowerCase()
    switch (KeyToLowwerCase) {
    case 'q':
        makePreviousBlockActive();
        break;
    case 'й':
        makePreviousBlockActive();
        break;
    case 'e':
        makeNextBlockActive();
        break;
    case 'у':
        makeNextBlockActive();
        break;
    default:
        break;
    }
  }
  
  const currentPage = () => {
    if(store.state.stats?.businessName[0] === "АВТОСАЛОН"){
      switch(store.state.activeBlock){
        case 0: return <Statistics />;
        case 1: return <Warehouse />;
        case 2: return <Products />;
        case 3: return <Staff />;
        case 4: return <Advance />;
      }
    }
    else{
      switch(store.state.activeBlock){
        case 0: return <Statistics />;
        case 1: return <Warehouse />;
        case 2: return <Products />;
        case 3: return <Advance />;
      }
    }
  }

  return store.state.active ? (
    <div className='business-stats' onKeyUp={keyClick} tabIndex={0}>
        <div className='business-name'>
            <div>{store.state.stats?.businessName[0]}</div>
            <div>{store.state.stats?.businessName[1]}</div>
        </div>
      <div className='menu'>
        <div className='menu_key' onClick={() => makePreviousBlockActive()}>Q
        </div>
        <div className='menu_blocks-line'>
          {MenuBlocks.map((block, i) => (
            <div className='block' key={i}>
              <div
                className='content'
                onClick={() => store.setActiveBlock(i)}> {block} </div>
              <div className={cn('block__line', 
              {'block__line--active': store.state.activeBlock === i}
              )} />
            </div>
          ))}
        </div>
        <div className='line' />
        <div className='menu_key' onClick={() => makeNextBlockActive()}>E</div>
      </div>
      {currentPage()}
    </div>
  ) : null
})
