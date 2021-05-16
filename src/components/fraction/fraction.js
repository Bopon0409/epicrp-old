import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import store                from './fraction-store'
import classNames           from 'classnames'

import Header             from './modules/header'
import Aside              from './modules/aside'
import Body               from './modules/body'
import BottomMenu         from './modules/bottom-menu'
import Title              from './modules/title'
import ModalAds           from './modules/ads'
import ModalAdsEdit       from './modules/ads-edit'
import ContextMenu        from './modules/context-menu'
import ModalAward         from './modules/modal-award'
import ModalReprimand     from './modules/modal-reprimand'
import ModalDismiss       from './modules/modal-dismiss'
import ModalGroupCreate   from './modules/group-create'
import ModalGroupSettings from './modules/group-settings'

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
