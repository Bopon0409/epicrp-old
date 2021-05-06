import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'

export default observer(() => {
  const { adsEdit: ad } = store.state
  const { setEditTitle, setEditText, editSubmit } = store

  return store.state.adsEditActive ? (
    <div className='ads-edit'>
      <div
        className='edit__close'
        onClick={() => store.setAdsEditActive(false)}
      >
        <Icon icon='close' />
      </div>
      <input
        type='text'
        className='edit__title'
        placeholder='Введите заголовок'
        value={ad.title}
        onChange={setEditTitle}
      />
      <div className='text'>
        <div className='text__line' />
        <textarea
          className='text__content skroll'
          placeholder='Введите текст'
          value={ad.text}
          onChange={setEditText}
        />
      </div>
      <div className='edit__button' onClick={editSubmit}>
        Сохранить
      </div>
    </div>
  ) : null
})
