import React                from 'react'
import { observer }         from 'mobx-react-lite'
import store                from '../atm-store'

export const CardChoice = observer(() => {
  const { cards } = store.state
  const { setCard } = store
  const listStyle = {
    justifyContent: cards.length > 1 ? 'space-between' : 'center'
  }

  return (
    <div className='card-choice'>
      {cards.length ? (
        <div className='card__container'>
          <div className='title'>Выберите платёжную карту</div>
          <div className='card__list' style={listStyle}>{
            cards.map(({ cardNumber, id }, i) =>
              <div className='car__item' key={id} onClick={() => setCard(id)}>
                <div className='card__name'>Карта №{i + 1}</div>
                <div
                  className='card__number'>
                  **** **** **** {cardNumber.substr(cardNumber.length - 4)}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='card__container'>
          <div className='title'>У вас нет банковских карт</div>
          <div className='hint'>Вы можете оформить карту в ближайшем банке</div>
          <div className='button'>
            <div className='text'>Построить маршрут до ближайшего банка</div>
          </div>
        </div>
      )}
    </div>
  )
})