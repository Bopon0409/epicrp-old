import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../house-store'
import classNames   from 'classnames'
import Switch       from 'react-switch'

export default observer(() => {
  store.roommatesInit()
  const { roommates, currentRoommateId, owner } = store.state
  const { setRoommate, setAccess, currentRoommate } = store
  const { populated, rentPrice, garagePlace, online } = currentRoommate

  const roommatesList = roommates.map(({ name, id }) => {
    const active = currentRoommateId === id
    const handler = () => setRoommate(id)
    const classes = classNames(
      'roommate__member',
      active && 'roommate__member-active'
    )

    return <div className={classes} onClick={handler} key={id}>
      {name}
    </div>
  })

  const accessList = currentRoommate.access.map(({ name, value }, i) =>
    <div className='access__item' key={i}>
      <div className='access__name'>{name}</div>
      <Switch onChange={() => setAccess(name)} checked={value} />
    </div>
  )

  return (
    <div className='roommates'>
      <div className='members'>
        <div className='title'>Владелец дома</div>
        <div className='roommate__member'>{owner}</div>
        <div className='title'>Жильца дома</div>
        <div className='roommates__list scroll'>{roommatesList}</div>
      </div>
      <div className='access'>
        <div className='column-title'>Разрешения</div>
        <div className='access__list scroll'>{accessList}</div>
      </div>
      <div className='info'>
        <div className='column-title'>Информация</div>
        <div className='info__row'>
          <div className='info__field'>Заселён</div>
          <div className='info__value'>{populated}</div>
        </div>
        <div className='info__row'>
          <div className='info__field'>Стоимость аренды</div>
          <div className='info__value'>{rentPrice}</div>
        </div>
        <div className='info__row'>
          <div className='info__field'>Место в гараже</div>
          <div className='info__value'>{garagePlace || 'Нет'}</div>
        </div>
        <div className='info__row'>
          <div className='info__field'>Статус</div>
          <div className='info__value'>{online ? 'В сети' : 'Не в сети'}</div>
        </div>

      </div>
      {/*<div className='hint'>*/}
      {/*  Во избежании курьёзных ситуаций настоятельно рекомендуем внимательно*/}
      {/*  выбирать настройки для сожителей.*/}
      {/*</div>*/}
    </div>
  )
})