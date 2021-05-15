import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'

export default observer(() => {
  const membersList = store.membersList.map((member, i) => {
    const { groupId, rankNum, name, id, online, lastActivity } = member
    const group = groupId ? store.getGroupName(groupId) : 'Без отдела'
    const handler = e => store.memberClickHandler(e, id)

    return (
      <div className='row' key={i} onClick={handler}>
        <div className='list__item'>{online && <div className='online' />}</div>
        <div className='list__item'>
          <div className='name'>{name}</div>
        </div>
        <div className='list__item list__item_bg'>
          <div className='rank'>{store.getRankName(rankNum)}</div>
        </div>
        <div className='list__item list__item_bg'>
          <div className='group'>{group}</div>
        </div>
        <div className='list__item'>
          <div className='last-activity'>{lastActivity}</div>
        </div>
      </div>
    )
  })

  return (
    <div className='members-list scroll'>
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
