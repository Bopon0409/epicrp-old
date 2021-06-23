import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { store } from './business-stats-store'
import { MenuBlockNames } from './constants'
import './business-stats.scss'
import cn from 'classnames'

import { Statistics } from './components/Statistics';
import { Warehouse } from './components/Warehouse';

export const BusinessStats = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setStats, setWarehouse } = store
    console.log(store)
    em.addHandler('business-stats.active', setActive);
    em.addHandler('business-stats.stats', setStats);
    em.addHandler('business-stats.warehouse', setWarehouse);
    return () => {
      em.removeHandler('business-stats.active', setActive);
      em.removeHandler('business-stats.stats', setStats);
      em.addHandler('business-stats.warehouse', setWarehouse);
    }
  }, [])

  const makeNextBlockActive = () => {
    if (store.state.activeBlock < MenuBlockNames.length - 1) {
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
      switch(store.state.activeBlock){
        case 0: return <Statistics />;
        case 1: return <Warehouse />;
        case 2: return;
        case 3: return;
        case 4: return;
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
          {MenuBlockNames.map((block, i) => (
            <div className='block' key={i}>
              <div
                className='content'key={i}
                onClick={() => store.setActiveBlock(i)}> {block} </div>
              <div className={cn('block__line', 
              {['block__line--active']: store.state.activeBlock === i}
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
