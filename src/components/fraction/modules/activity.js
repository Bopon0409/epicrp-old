import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'

export default observer(() => {
  const user = store.state.infoUser || store.state.user
  const { name, rankName, sex, phone, group } = user
  const color = store.getMemberColor(user.id)

  const activityButtonsList = store.state.activityList.map((activity, i) => (
    <div className='header__activity-button' key={i}>
      <div className='text'>{activity}</div>
    </div>
  ))

  return (
    <div className='activity skroll'>
      <div className='activity__header'>
        <div className='header__icon'>
          <div className='letter' style={{ color }}>
            {name[0]}
          </div>
          {true && <div className='online' />}
        </div>
        <div className='header__info'>
          <div className='header__name'>{name}</div>
          <div className='header__rank'>Ранг: {rankName}</div>
          <div className='header__sex'>
            Пол: {sex === 'male' ? 'Мужской' : 'Женский'}
          </div>
          <div className='header__phone'>Номер телефона: {phone}</div>
          <div className='header__group'>Отдел: {group || 'Без отдела'}</div>
        </div>
        <div className='header__activity-button-container'>
          {activityButtonsList}
        </div>
      </div>
      <div className="activity__stat">
        <div className="title">Статистика активности</div>
        <div className="row row-header">
          <div className="cell">Дата</div>
          <div className="cell">Вход</div>
          <div className="cell">Выход</div>
          <div className="cell">Был онлайн</div>
        </div>
        <div className="row">
          <div className="cell">26/04/2021</div>
          <div className="cell">17:03:03</div>
          <div className="cell">17:05:03</div>
          <div className="cell">00:02:03</div>
        </div>
      </div>
    </div>
  )
})
