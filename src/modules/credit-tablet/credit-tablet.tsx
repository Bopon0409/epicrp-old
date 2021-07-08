import React, { useEffect }                 from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { observer }                         from 'mobx-react-lite'
import { store }                            from './credit-tablet-store'
import logo                                 from './img/logo.svg'

export const CreditTablet = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { open, close } = store

    em.addHandler('credit-tablet.open', open)
    em.addHandler('credit-tablet.close', close)

    return () => {
      em.removeHandler('credit-tablet.open', open)
      em.removeHandler('credit-tablet.close', close)
    }
  }, [])

  const {
    state: { active, input, name, rating, money, property, credits },
    setInput, request, setModal
  } = store

  const propertyList = property.map((item) => (
    <div className='property__item'>
      <div className='property__type'>{item.type}</div>
      <div className='property__info'>
        <div className='property__name'>{item.name}</div>
        <div className='property__price'>{item.price}</div>
      </div>
    </div>
  ))

  const creditList = credits.map((item) => (
    <div className='credit__item'>
      <div className='credit__name'>{item.name}</div>
      <div className={`credit__status--${item.status}`}>
        {store.getCreditStatusName(item.status)}
      </div>
    </div>
  ))

  return active ? (
    <div className='credit-tablet'>
      <img src={logo} alt='' className='logo' />
      <div className='title'>
        <div className='title__label'>Информация</div>
        <div className='title__name'>{name}</div>
      </div>

      <div className='lists-container'>
        <div className='lists-container__title'>Имущество</div>
        <div className='lists-container__title'>Кредиты</div>
        <div className='property'>
          {propertyList}
          <div className='property__bank'>
            <div className='property__type'>Банковский счёт</div>
            <div className='property__money'>{money}</div>
          </div>
        </div>
        <div className='credit'>{creditList}</div>
      </div>

      <div className='rating'>
        <div className='rating__title'>Рейтинг надёжности заёмщика</div>
        <div className='rating__name'>
          {rating > 60 ? 'Надежный' : 'Не надежный'}
        </div>
        <CircularProgressbar
          value={rating}
          text={`${rating}%`}
          strokeWidth={5}
          styles={buildStyles({
            pathColor: '#1884D2',
            trailColor: 'transparent'
          })}
        />
      </div>

      <div className='actions'>
        <div className='actions__title'>Действия</div>
        <input type='number' className='actions__input' value={input.toString()}
          onChange={setInput} placeholder='Введите сумму кредита' />
        <div className='buttons'>
          <div className='button' onClick={() => setModal(true)}>
            <div className='button__text'>Выбор имущества</div>
            <div className='button__line' />
          </div>
          <div className='button' onClick={request}>
            <div className='button__text'>Отправить заявку</div>
            <div className='button__line' />
          </div>
        </div>
      </div>
    </div>
  ) : null
})