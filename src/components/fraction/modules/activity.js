import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import classNames from 'classnames'

export default observer(() => {
  const { activityCurrent, activityData, activityList } = store.state
  const { name, rankNum, sex, phone, groupId, id } = store.activityUser

  const rankName = store.getRankName(rankNum)
  const group = store.getGruopName(groupId)
  const color = store.getMemberColor(id)

  const activityButtonsList = activityList.map((activity, i) => {
    const active = activity === activityCurrent
    const classes = classNames('header__activity-button', active && 'active')
    return (
      <div
        className={classes}
        onClick={() => store.requestActivity(activity, id)}
        key={i}
      >
        <div className='text'>{activity}</div>
      </div>
    )
  })

  const activityListView = activityData.map((activity, i) => (
    <div className='row' key={`activity row ${i}`}>
      {activity.map((cell, j) => (
        <div className='cell' key={`activity cell ${i}${j}`}>
          {cell}
        </div>
      ))}
    </div>
  ))

  return (
    <div className='activity skroll'>
      <div className='activity__header'>
        <div className='header__icon'>
          <div className='letter' style={{ color }}>
            {name ? name[0] : ''}
          </div>
          {true && <div className='online' />}
        </div>
        <div className='header__info'>
          <div className='header__name'>{name}</div>
          <div className='header__rank'>Ранг: {rankName}</div>
          <div className='header__sex'>Пол: {sex ? 'Мужской' : 'Женский'}</div>
          <div className='header__phone'>Номер телефона: {phone}</div>
          <div className='header__group'>Отдел: {group || 'Без отдела'}</div>
        </div>
        <div className='header__activity-button-container'>
          {activityButtonsList}
        </div>
      </div>
      {activityCurrent && (
        <div className='activity__stat'>
          <div className='title'>{store.state.activityCurrent}</div>
          {activityListView}
        </div>
      )}
    </div>
  )
})
