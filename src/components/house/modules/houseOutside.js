import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../house-store'
import garageIcon   from '../img/outside_garage.svg'
import houseIcon    from '../img/outside_house.svg'
import closeIcon    from '../img/outside_close.svg'
import openIcon     from '../img/outside_open.svg'
import sellIcon     from '../img/outside_sell.svg'

export default observer(() => {
  const {
    owner, houseNumber, houseClass, tax, roomQuantity, capabilities,
    garageAvailability, garagePlaceQuantity, price, open
  } = store.state

  const { enterHouse, enterGarage, sellHouse, buyHouse, houseLock } = store

  const lockButton = open ? (
    <div className='button button-lock' onClick={houseLock}>
      <img src={closeIcon} alt='' className='button__icon' />
      <div className='button__text'>Закрыть дом</div>
    </div>
  ) : (
    <div className='button button-lock' onClick={houseLock}>
      <img src={openIcon} alt='' className='button__icon' />
      <div className='button__text'>Открыть дом</div>
    </div>
  )

  return (
    <div className='outside'>
      <div className='main'>
        <img src={houseIcon} alt='' className='main__icon' />
        <div className='main__title'>Дом</div>
        <div className='main__number'>№{houseNumber}</div>
        <div className='owner'>
          <div className='owner__text'>Владелец</div>
          <div className='owner__name'>{owner || 'Государство'}</div>
        </div>
        <div className='main__button' onClick={enterHouse}>
          <div className='text'>Войти</div>
        </div>
      </div>
      <div className='info'>
        <div className='info__title'>Информация</div>
        <div className='info__row'>
          <div className='info__field'>Класс дома</div>
          <div className='info__value'>{houseClass}</div>
        </div>
        <div className='info__row'>
          <div className='info__field'>Налог</div>
          <div className='info__value'>${tax}</div>
        </div>
        <div className='info__row'>
          <div className='info__field'>Количество комнат</div>
          <div className='info__value'>{roomQuantity}</div>
        </div>
        <div className='info__row'>
          <div className='info__field'>Гараж</div>
          <div className='info__value'>{garageAvailability || 'Нет'}</div>
        </div>
        <div className='info__row'>
          <div className='info__field'>Мест в гараже</div>
          <div className='info__value'>{garagePlaceQuantity}</div>
        </div>
        <div className='info__row info__row-bold'>
          <div className='info__field'>Гос. цена</div>
          <div className='info__value'>${price}</div>
        </div>
      </div>

      <div className='button button-garage' onClick={enterGarage}>
        <img src={garageIcon} alt='' className='button__icon' />
        <div className='button__text'>Войти в гараж</div>
      </div>

      {lockButton}

      {owner && capabilities.sell && (
        <div className='button button-sell' onClick={sellHouse}>
          <img src={sellIcon} alt='' className='button__icon' />
          <div className='button__text'>Продать дом</div>
        </div>
      )}

      {!owner && <div className='button button-sell' onClick={buyHouse}>
        <img src={sellIcon} alt='' className='button__icon' />
        <div className='button__text'>Купить дом</div>
      </div>}
    </div>
  )
})