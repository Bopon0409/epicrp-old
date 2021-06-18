import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store                from './fraction-store'
import classNames           from 'classnames'

import Header             from './components/header'
import Aside              from './components/aside'
import Body               from './components/body'
import BottomMenu         from './components/bottom-menu'
import Title              from './components/title'
import ModalAds           from './components/ads'
import ModalAdsEdit       from './components/ads-edit'
import ContextMenu        from './components/context-menu'
import ModalAward         from './components/modal-award'
import ModalReprimand     from './components/modal-reprimand'
import ModalDismiss       from './components/modal-dismiss'
import ModalGroupCreate   from './components/group-create'
import ModalGroupSettings from './components/group-settings'

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

  const modals = <>
    <ModalAds />
    <ModalAdsEdit />
    <ModalAward />
    <ModalReprimand />
    <ModalDismiss />
    <ModalGroupCreate />
    <ModalGroupSettings />
  </>

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
        {modals}
      </div>
      <ContextMenu />
    </div>
  ) : null
})
