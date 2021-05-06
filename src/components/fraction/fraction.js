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

export default observer(() => {
  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData } = store
    em.addHandler('fraction.active', setActive)
    em.addHandler('fraction.data', setData)
    return () => {
      em.removeHandler('fraction.active', setActive)
      em.removeHandler('fraction.data', setData)
    }
  }, [])

  const wrapperClasses = classNames(
    'fraction__wrapper',
    store.isBlur && 'fraction__blur'
  )

  return store.state.active ? (
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
  ) : null
})
