import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../fraction-store'
import classNames   from 'classnames/bind'

export default observer(() => {
  const member = store.getMemberById(store.memberModalId)
  const { online, name, reprimands, lastActivity, rankNum, groupId } = member
  const rankName = store.getRankName(rankNum)
  const groupName = store.getGroupName(groupId)

  return (
    <aside className='modal__aside'>
      <div className='aside__icon'>
        <div className='text'>С</div>
        {online && <div className='online' />}
      </div>
      <div className='aside__name'>{name}</div>
      <div className='member-info'>
        <div className='row'>
          <div className='cell'>Ранг:</div>
          <div className='cell'>{rankName}</div>
        </div>
        <div className='row'>
          <div className='cell'>Отдел:</div>
          <div className='cell'>{groupName || 'Без отдела'}</div>
        </div>
        <div className='row'>
          <div className='cell'>Последний вход:</div>
          <div className={classNames('cell', online && 'cell-online')}>
            {online ? 'Онлайн' : lastActivity}
          </div>
        </div>
        <div className='row'>
          <div className='cell'>Выговоров:</div>
          <div className='cell'>{reprimands}/3</div>
        </div>
      </div>
      <div className='btn'>
        <div className='btn__text'>Выдать</div>
      </div>
    </aside>
  )
})
