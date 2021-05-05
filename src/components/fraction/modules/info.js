import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'

export default observer(() => {
  const { name, description } = store.state
  console.log(store.discrordList)
  const discrodListView = store.discrordList.map(group => (
    <div className='discord-list__item'>
      <div className="discord-list__title">{group.groupName}</div>
    </div>
  ))
  return (
    <div className='info'>
      <div className='about'>
        <div className='about__title'>{name}</div>
        <div className='about__description'>{description}</div>
        <div className='about__ads'>Смотреть объявления фракции</div>
      </div>
      <div className='discord-list skroll'></div>
    </div>
  )
})
