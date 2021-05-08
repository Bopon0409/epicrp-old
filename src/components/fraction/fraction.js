import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import store from './fraction-store'
import classNames from 'classnames'

import Header from './modules/header'
import Aside from './modules/aside'
import Body from './modules/body'
import BottomMenu from './modules/bottom-menu'
import Title from './modules/title'
import Ads from './modules/ads'
import AdsEdit from './modules/ads-edit'
import ContextMenu from './modules/context-menu'

export default observer(() => {
  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData, setActivityData, setStorageData } = store

    em.addHandler('fraction.active', setActive)
    em.addHandler('fraction.data', setData)
    em.addHandler('fraction.activity', setActivityData)
    em.addHandler('fraction.storage', setStorageData)
    return () => {
      em.removeHandler('fraction.active', setActive)
      em.removeHandler('fraction.data', setData)
      em.removeHandler('fraction.activity', setActivityData)
      em.removeHandler('fraction.storage', setStorageData)
    }
  }, [])

  const wrapperClasses = classNames(
    'fraction__wrapper',
    store.isBlur && 'fraction__blur'
  )

  return store.state.active ? (
    <div className='fraction-context'>
      <div className='fraction'>
        <div className={wrapperClasses}>
          <Title />
          <Header />
          <Aside />
          <Body />
          <BottomMenu />
        </div>

        <Ads />
        <AdsEdit />
      </div>
      <ContextMenu />
    </div>
  ) : null
})
