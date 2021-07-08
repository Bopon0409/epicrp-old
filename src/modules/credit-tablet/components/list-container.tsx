import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../credit-tablet-store'

export const ListContainer = observer(() => {
  const { money, property, credits } = store.state

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

  return (
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
  )
})