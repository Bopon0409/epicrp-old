import React, {useEffect}        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../player-menu-store'
import {
  buildStyles,
  CircularProgressbarWithChildren
}                   from 'react-circular-progressbar'

export const Stats = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setStatsData } = store
    em.addHandler('player-menu.active', true)
    em.addHandler('player-menu.stats', setStatsData)
    console.log(store)
    return () => {
      em.removeHandler('player-menu.active', true)
      em.removeHandler('player-menu.stats', setStatsData)
    }
  }, [])
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
    trailColor: 'transparent',
  })

  return (
    <div className='stats'>
      <div className='stats__left'>
        <div className='player_name'>
          <div className='name'>{name}</div>
          <div className='status'>{playerStatus}</div>
        </div>
        <div className='lvl'>
          <div className='lvl__label'>Уровень</div>
          <CircularProgressbarWithChildren value={exp[0] / exp[1] * 100}
            className='progress-bar' strokeWidth={6} styles={circularStyles}>
            <div className='lvl__value'>{lvl}</div>
            <div className='lvl__exp'>{exp[0]} / {exp[1]}</div>
          </CircularProgressbarWithChildren>
        </div>
        <div className='info_about_account-text'>Информация об аккаунте</div>
        <div className='info_about_account'>
          <div className='vip_status line'>
            <span className='white'>VIP - статус</span>
            { hasVip ? <span className='yellow'>Премиум</span> : 
            <span className='white'>Отсутсвует</span>}
          </div>
          <div className="reg-date line">
            <span className='white'>Дата регистрации</span>
            <span className='white'>{registerData}</span>
          </div>
          <div className="warns line">
            <span className='white'>Предупреждений</span>
            <span className='white'>{warnsCount}</span>
          </div>
          <div className="online-today line">
            <span className='white'>Онлайн сегодня</span>
            <span className='white'>{online[0]}</span>
          </div>
          <div className="sum-online line">
            <span className='white'>Общий онлайн</span>
            <span className='white'>{online[1]}</span>
          </div>
        </div>
        <div className='referrals'>
          <div className='referrals__amount line'>
            <span className='amount'>{invites[0]}</span>
            <span className='text yellow'>ПРИГЛАШЕНО ИГРОКОВ</span>
          </div>
          <div className='referrals__profit line'>
            <span className='amount'>${invites[1]}</span>
            <span className='text yellow'>ЗАРАБОТАНО С ПРИГЛАШЕНИЙ</span>
          </div>
        </div>
        <div className="get_money_of_invites">ЗАБРАТЬ НАГРАДУ</div>

      </div>
      <div className='stats__center'></div>
      <div className='stats__right'></div>
    </div>
  )
})



/*
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
        <div className='code__label'>Ваш уникальный реферальный код</div>
        <div className='code__container'>
          <div className='text'>{referralCode}</div>
        </div>
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

      <div className='stats__money'>
        <div className='stats__grid'>
          <div className='stats__field'>Наличные</div>
          <div className='stats__value'>{cash}</div>
          <div className='stats__field'>Банковская карта #1</div>
          <div className='stats__value'>{card1}</div>
          <div className='stats__field'>Банковская карта #2</div>
          <div className='stats__value'>{card2}</div>
          <div className='stats__field'>Страховка</div>
          <div className='stats__value'>{insurance}</div>
          <div className='stats__field'>Кредит</div>
          <div className='stats__value'>{credit}</div>
        </div>
      </div>

      <div className='stats__properties'>
        <div className='properties__list'>{
          properties.map((el, i) => (
            <div className='properties__item' key={i}>
              <div className='properties__name'>{el.name}</div>
              <div className='properties__type'>{el.type}</div>
              <div className='properties__date'>Приобретено {el.date}</div>
            </div>
          ))
        }</div>
      </div>

      <div className='stats__hints'>
        Игрок получивший ваш реферальный код должен указать его при регистрации
        своего аккаунта чтобы получить бонус по вашему реферальному коду игрок
        обязан прокачать одного из своих персонажей до 3-го игрового уровня
      </div>


*/