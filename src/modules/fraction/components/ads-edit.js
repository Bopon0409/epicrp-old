import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'

export default observer(() => {
  const { setEditTitle, setEditText, editSubmit, setAdsEditActive } = store
  const { title, text } = store.state.adsEdit

  return (
    store.state.adsEditActive && (
      <div className='ads-edit'>
        <div className='edit__close' onClick={() => setAdsEditActive(false)}>
          <Icon icon='close' />
        </div>
        <input
          type='text'
          className='edit__title'
          placeholder='Введите заголовок'
          value={title}
          onChange={setEditTitle}
        />
        <div className='text'>
          <div className='text__line' />
          <textarea
            className='text__content scroll'
            placeholder='Введите текст'
            value={text}
            onChange={setEditText}
          />
        </div>
        <div className='edit__button' onClick={editSubmit}>
          Сохранить
        </div>
      </div>
    )
  )
})
