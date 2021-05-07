import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'

export default observer(() => {
  const membersList = store.membersList.map((member, i) => {
    return (
      <div className='row' key={i}>
        <div className='list__item'>
          {member.online && <div className='online' />}
        </div>
        <div className='list__item'>
          <div className='name'>{member.name}</div>
        </div>
        <div className='list__item list__item_bg'>
          <div className='rank'>{store.getRankName(member.rankNum)}</div>
        </div>
        <div className='list__item list__item_bg'>
          <div className='group'>
            {member.groupId ? store.getGruopName(member.groupId) : 'Без отдела'}
          </div>
        </div>
        <div className='list__item'>
          <div className='last-activity'>{member.lastActivity}</div>
        </div>
      </div>
    )
  })

  return (
    <div className='members-list skroll'>
      <div className='row'>
        <div className='header__item'>Онлайн</div>
        <div className='header__item'>Имя</div>
        <div className='header__item'>Ранг</div>
        <div className='header__item'>Отдел</div>
        <div className='header__item'>Последняя активность</div>
      </div>
      {membersList}
    </div>
  )
})
