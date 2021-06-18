import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'

import deleteBtnIcon from '../img/ad_delete.svg'
import editBtnIcon from '../img/ad_edit.svg'

export default observer(() => {
  const { ads, capabilities } = store.state
  const { setAdsEditActive, adsDelete } = store

  return ads.map(({ id, title, author, date, text }) => {
    const editHandler = () => {
      setAdsEditActive(true, { id, title, author, date, text })
    }

    const controlAdsView = capabilities.controlAds && (
      <div className='ad__btn-container'>
        <button className='ad__button' onClick={editHandler}>
          <img src={editBtnIcon} alt='' />
        </button>
        <button className='ad__button' onClick={() => adsDelete(id)}>
          <img src={deleteBtnIcon} alt='' />
        </button>
      </div>
    )

    return (
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
        {controlAdsView}
      </div>
    )
  })
})
