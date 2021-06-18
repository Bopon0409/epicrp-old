import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'
import AdsContentList from './ads-content-list'

export default observer(() => {
  const { ads, capabilities } = store.state
  const { navClickHandler, setAdsEditActive, setAdsActive } = store

  const navList = ads.map(({ id, title }) => (
    <div
      className='nav__item'
      key={`ad nav ${id}`}
      onClick={() => navClickHandler(id)}
    >
      {title}
    </div>
  ))

  const AddButton = () =>
    capabilities.controlAds && (
      <button className='nav__ad-btn' onClick={() => setAdsEditActive(true)}>
        Добавить объявление
      </button>
    )

  return (
    store.state.adsActive && (
      <div className='ads'>
        <div className='ads__close' onClick={() => setAdsActive(false)}>
          <Icon icon='close' />
        </div>
        <div className='ads__content scroll'>
          <AdsContentList />
        </div>
        <div className='ads__nav'>
          <div className='nav__container scroll'>{navList}</div>

          <AddButton />
        </div>
      </div>
    )
  )
})
