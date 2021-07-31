import React           from 'react'
import { observer }    from 'mobx-react-lite'
import { store }       from '../player-menu-store'
import {
  buildStyles,
  CircularProgressbarWithChildren
}                      from 'react-circular-progressbar'
import { priceFormat } from '../../../services/services'

const ReferralText = `ИГРОК ПОЛУЧИВШИЙ ВАШ РЕФЕРАЛЬНЫЙ КОД
ДОЛЖЕН УКАЗАТЬ ЕГО ПРИ РЕГИСТРАЦИИ СВОЕГО АККАУНТА
ЧТОБЫ ПОЛУЧИТЬ БОНУС ПО ВАШЕМУ РЕФЕРАЛЬНОМУ КОДУ
ИГРОК ОБЯЗАН ПРОКАЧАТЬ ОДНОГО ИЗ СВОИХ ПЕРСОНАЖЕЙ ДО 3-ГО ИГРОВОГО УРОВНЯ`

export const Stats = observer(() => {
  const {
    stats: {
      name, lvl, exp, hasVip, invites, online, playerStatus,
      properties, referralCode, registerData, warnsCount,
      fraction: { fractionName, rankName, lastRise, reprimands, salary },
      bank: { cash, cards, credit, insurance }
    }, getReferralReward
  } = store

  const circularStyles = buildStyles({
    pathColor: '#F2C94C',
    trailColor: 'transparent'
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
            className='progress-bar' strokeWidth={5} styles={circularStyles}>
            <div className='lvl__value'>{lvl}</div>
            <div className='lvl__exp'>{exp[0]} / {exp[1]}</div>
          </CircularProgressbarWithChildren>
        </div>
        <div className='info_about_account-text'>Информация об аккаунте</div>
        <div className='info_about_account'>
          <div className='vip_status line'>
            <span className='white'>VIP - статус</span>
            {hasVip ? <span className='yellow'>Премиум</span> :
              <span className='white'>Отсутсвует</span>}
          </div>
          <div className='reg-date line'>
            <span className='white'>Дата регистрации</span>
            <span className='white'>{registerData}</span>
          </div>
          <div className='warns line'>
            <span className='white'>Предупреждений</span>
            <span className='white'>{warnsCount}</span>
          </div>
          <div className='online-today line'>
            <span className='white'>Онлайн сегодня</span>
            <span className='white'>{online[0]}</span>
          </div>
          <div className='sum-online line'>
            <span className='white'>Общий онлайн</span>
            <span className='white'>{online[1]}</span>
          </div>
        </div>
        <div className='referrals'>
          <div className='referrals__amount line'>
            <span className='amount'>{invites[0]}</span>
            <span className='text yellow'>ПРИГЛАШЕНО ИГРОКОВ</span>
          </div>
          {/* <div className='referrals__profit line'>
            <span className='amount'>${invites[1]}</span>
            <span className='text yellow'>ЗАРАБОТАНО С ПРИГЛАШЕНИЙ</span>
          </div> */}
        </div>
        <div className='get_money_of_invites'>НАГРАДЫ</div>

      </div>
      <div className='stats__center'>
        <div className='fraction_and_money'>
          <div className='fraction_and_money__block'>
            <div className='block_name'>Фракция</div>
            <div className='block_info'>
              <div className='line'>
                <span>Фракция</span>
                <span>{fractionName}</span>
              </div>
              <div className='line'>
                <span>Должность</span>
                <span>{rankName}</span>
              </div>
              <div className='line'>
                <span>Зарплата за последний час</span>
                <span>${priceFormat(salary)}</span>
              </div>
              <div className='line'>
                <span>Последнее повышение</span>
                <span>{lastRise}</span>
              </div>
              <div className='line'>
                <span>Выговоры</span>
                <span>{reprimands}</span>
              </div>
            </div>
          </div>
          <div className='fraction_and_money__line' />
          <div className='fraction_and_money__block'>
            <div className='block_name'>Общий счёт</div>
            <div className='block_info'>
              <div className='line'>
                <span>Наличные</span>
                <span>${priceFormat(cash)}</span>
              </div>
              <div className='line'>
                <span>Банковская карта #1</span>
                <span>${priceFormat(!cards[0] ? 0 : cards[0])}</span>
              </div>
              <div className='line'>
                <span>Банковская карта #2</span>
                <span>${priceFormat(!cards[1] ? 0 : cards[1])}</span>
              </div>
              <div className='line'>
                <span>Страховка</span>
                <span>{insurance}</span>
              </div>
              <div className='line'>
                <span>Кредит</span>
                <span>{credit}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='code'>
          <div className='text'>ВАШ УНИКАЛЬНЫЙ РЕФЕРАЛЬНЫЙ КОД</div>
          <div className='referral_code'>
            <div className='referral_code_content'>{referralCode}</div>
            <div className="referral_code_copy"
            onClick={() => navigator.clipboard.writeText(referralCode)}>Копировать</div>  
          </div>
        </div>
      </div>
      <div className='stats__right'>
        <div className='stats__right-name'>Имущество</div>
        <div className='stats__right-list'>
          {properties.map((property, i) => (
              <div className='property' key={i}>
                <span>{property.name}</span>
                <span>{property.type}</span>
                <span>{property.date}</span>
              </div>
            )
          )}
        </div>
        <div className='stats__right-info_about_referral'
          onClick={() => getReferralReward()}>
          {ReferralText}</div>
      </div>
    </div>
  )
})
