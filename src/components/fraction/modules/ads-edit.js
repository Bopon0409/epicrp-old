import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'

export default observer(() => {
  const { setEditTitle, setEditText, editSubmit, setAdsEditActive } = store

  return store.state.adsEditActive ? (
    <div className='ads-edit'>
      <div className='edit__close' onClick={() => setAdsEditActive(false)}>
        <Icon icon='close' />
      </div>
      <input
        type='text'
        className='edit__title'
        placeholder='Введите заголовок'
        value={store.state.adsEdit.title}
        onChange={setEditTitle}
      />
      <div className='text'>
        <div className='text__line' />
        <textarea
          className='text__content skroll'
          placeholder='Введите текст'
          value={store.state.adsEdit.text}
          onChange={setEditText}
        />
      </div>
      <div className='edit__button' onClick={editSubmit}>
        Сохранить
      </div>
    </div>
  ) : null
})
