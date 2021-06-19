import React           from 'react'
import { observer }    from 'mobx-react-lite'
import { store }       from '../player-menu-store'
import {
  buildStyles,
  CircularProgressbarWithChildren
}                      from 'react-circular-progressbar'
import progressBarImg1 from '../../inventory/images/progress-bar-img-1.svg'

export const Stats = observer(() => {
  const {
    stats: {
      name, lvl, exp, hasVip, invites, online, playerStatus,
      properties, referralCode, registerData, warnsCount,
      fraction: { fractionName, rankName, lastRise, reprimands, salary },
      bank: { cash, card1, card2, credit, insurance }
    }, getReferralReward
  } = store

  const circularStyles = buildStyles({
    pathColor: '#F2C94C',
    trailColor: 'transparent'
  })

  return (
    <div className='stats'>
      <div className='stats__info'>
        <div className='stats__name'>{name}</div>
        <div className='stats__player-status'>{playerStatus}</div>
        <div className='lvl'>
          <div className='lvl__label'>Уровень</div>
          <CircularProgressbarWithChildren value={exp[0] / exp[1] * 100}
            className='progress-bar' strokeWidth={14} styles={circularStyles}>
            <div className='lvl__value'>{lvl}</div>
            <div className='lvl__exp'>{exp[0]} / {exp[1]}</div>
          </CircularProgressbarWithChildren>
        </div>
        <div className='stats__label'>Информация об аккаунте</div>
        <div className='stats__grid'>
          <div className='stats__field'>VIP - статус</div>
          <div className='stats__value'>{hasVip}</div>
          <div className='stats__field'>Дата регистрации</div>
          <div className='stats__value'>{registerData}</div>
          <div className='stats__field'>Предупреждений</div>
          <div className='stats__value'>{warnsCount}</div>
          <div className='stats__field'>Онлайн сегодня</div>
          <div className='stats__value'>{online[0]}</div>
          <div className='stats__field'>Общий онлайн</div>
          <div className='stats__value'>online[1]</div>
        </div>
      </div>

      <div className='stats__referral'>
        <div className='referral__value'>{invites[0]}</div>
        <div className='referral__field'>Приглашено игроков</div>
        <div className='referral__value'>{invites[1]}</div>
        <div className='referral__field'>Заработано с приглашений</div>
        <div className='referral__button' onClick={getReferralReward}>
          <div className='text'>Забрать награду</div>
        </div>
      </div>

      <div className='stats__code'>
        <div className='code__label'>Ваш</div>
      </div>

      <div className='stats__fraction'>
        <div className='stats__grid'>
          <div className='stats__field'>Фракция</div>
          <div className='stats__value'>{fractionName}</div>
          <div className='stats__field'>Должность</div>
          <div className='stats__value'>{rankName}</div>
          <div className='stats__field'>Зарплата за последний час</div>
          <div className='stats__value'>{salary}</div>
          <div className='stats__field'>Последнее повышение</div>
          <div className='stats__value'>{lastRise}</div>
          <div className='stats__field'>Выговоры</div>
          <div className='stats__value'>{reprimands}</div>
        </div>
      </div>
    </div>
  )
})