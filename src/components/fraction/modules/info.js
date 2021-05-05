import React from 'react'
import { observer } from 'mobx-react-lite'
import UserIcon from './user-icon'
import store from '../fraction-store'

export default observer(() => {
  const { name, description } = store.state
  const discrodListView = store.discrordList.map((group, i) => (
    <div className='discord-list__item' key={`discord group ${i}`}>
      <div className='discord-list__title'>{group.name}</div>
      <div className='members__list'>
        {group.list.map((member, j) => (
          <div
            key={`discord member ${j}`}
            className='members__item'
            style={{ color: member.color || 'white' }}
          >
            <UserIcon size='37px' online={member.online} name={member.name} />
            {member.name}
          </div>
        ))}
      </div>
    </div>
  ))

  return (
    <div className='info'>
      <div className='about'>
        <div className='about__title'>{name}</div>
        <div className='about__description'>{description}</div>
        <div className='about__ads'>Смотреть объявления фракции</div>
      </div>
      <div className='discord-list skroll'>{discrodListView}</div>
    </div>
  )
})
