import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import UserIcon from './user-icon'

export default observer(() => {
  const { author, authorRank, lastChange, text } = store.state.ads
  const { getMemberByName, getMemberColor } = store
  const authorId = getMemberByName(author)
  const color = getMemberColor(authorId)

  const adsList = store.state.ads

  return (
    <div className='ads-modal'>
      {/* <div className='modal__content'>

      </div>

      <div className='modal__aside'>
        <div className='aside__title'>Автор</div>
        <UserIcon size={60} name={author} color={color} />
        <div className='aside__name'>{author}</div>
        <div className='aside__rank'>{authorRank}</div>
        <div className='aside__last-edit'>
          Последний раз редактировалось: {lastChange}
        </div>
        <div className='button__container'>
          <div className='button'>Создать объявление</div>
          <div className='button'>Редактировать объявление</div>
          <div className='button'>Удалить объявление</div>
        </div>
      </div> */}
    </div>
  )
})
