import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'

import deleteBtnIcon from '../img/ad_delete.svg'
import editBtnIcon from '../img/ad_edit.svg'

export default observer(() => {
  const { ads, capabilities } = store.state

  const navClickHandler = id => {
    const el = document.getElementById('ad' + id)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navList = ads.map(({ id, title }) => (
    <div
      className='nav__item'
      key={`ad nav ${id}`}
      onClick={() => navClickHandler(id)}
    >
      {title}
    </div>
  ))

  const contentList = ads.map(({ id, title, author, date, text }) => (
    <div className='content__item' key={`ad content ${id}`} id={'ad' + id}>
      <div className='ad__title'>{title}</div>
      <div className='ad__text'>
        <div className='ad__text-line' />
        <div className='ad__text-content'>{text}</div>
      </div>
      <div className='ad__footer'>
        <div className='ad__author'>
          Автор: <span>{author}</span>
        </div>
        <div className='ad__last-change'>Дата публикации: {date}</div>
      </div>
      {capabilities.controlAds && (
        <div className='ad__btn-container'>
          <button
            className='ad__button'
            onClick={() =>
              store.setAdsEditActive(true, { id, title, author, date, text })
            }
          >
            <img src={editBtnIcon} alt='' />
          </button>
          <button className='ad__button' onClick={() => store.adsDelete(id)}>
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
      <div className='ads__nav'>
        <div className='nav__container skroll'>{navList}</div>

        {capabilities.controlAds && (
          <button
            className='nav__ad-btn'
            onClick={() => store.setAdsEditActive(true)}
          >
            {' '}
            Добавить объявление
          </button>
        )}
      </div>
    </div>
  ) : null
})
