import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import UserIcon from './user-icon'

export default observer(() => {
  const membersList = group =>
    group.list.map(({ name, online, id }, j) => {
      const color = store.getMemberColor(id)
      return (
        <div key={`dis-memb ${j}`} className='members__item' style={{ color }}>
          <UserIcon size='33px' color={color} online={online} name={name} />
          {name}
        </div>
      )
    })

  return (
    <div className='discord-list skroll'>
      {store.discrordList.map((group, i) => (
        <div className='discord-list__item' key={`discord group ${i}`}>
          <div className='discord-list__title'>{group.name}</div>
          <div className='members__list'>{membersList(group)}</div>
        </div>
      ))}
    </div>
  )
})
