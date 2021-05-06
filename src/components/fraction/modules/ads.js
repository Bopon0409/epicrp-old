import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'

import deleteBtnIcon from '../img/ad_delete.svg'
import editBtnIcon from '../img/ad_edit.svg'

export default observer(() => {
  const { ads, capabilities } = store.state
  const { getMemberByName, getMemberColor } = store

  const navList = ads.map(({ id, title }) => (
    <div className='nav__item' key={`ad nav ${id}`}>
      {title}
    </div>
  ))

  const contentList = ads.map(({ id, title, author, lastChange, text }) => (
    <div className='content__item' key={`ad content ${id}`}>
      <div className='ad__title'>{title}</div>
      <div className='ad__text'>
        <div className='ad__text-line' />
        <div className='ad__text-content'>{text}</div>
      </div>
      <div className='ad__footer'>
        <div className='ad__author'>
          Автор:{' '}
          <span style={{ color: getMemberColor(getMemberByName(author)) }}>
            {author}
          </span>
        </div>
        <div className='ad__last-change'>
          Последний раз редактировалось: {lastChange}
        </div>
      </div>
      {capabilities.controlAds && (
        <div className='ad__btn-container'>
          <button className='ad__button'>
            <img src={editBtnIcon} alt='' />
          </button>
          <button className='ad__button'>
            <img src={deleteBtnIcon} alt='' />
          </button>
        </div>
      )}
    </div>
  ))

  return store.state.adsActive ? (
    <div className='ads'>
      <div className='ads__close' onClick={() => store.setAdsActive(false)}>
        <Icon icon='close' />
      </div>
      <div className='ads__content skroll'>{contentList}</div>
      <div className='ads__nav skroll'>
        <div className='nav__container'>{navList}</div>
        {capabilities.controlAds && (
          <button className='nav__ad-btn'> Добавить объявление</button>
        )}
      </div>
    </div>
  ) : null
})
