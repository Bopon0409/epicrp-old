import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../taxi-tablet-store'
import classNames   from 'classnames'

export const Aside = observer(() => {
  const {
    userName, lvl, progress, nextLvl, rating, transported,
    workTime, workStatus, car, carClass, rate
  } = store.state

  const buttonText = workStatus ? 'Уйти с линии' : 'Выйти на линию'
  const buttonClasses = classNames('aside__button',
    workStatus ? 'aside__button--inactive' : 'aside__button--active'
  )

  const workStatusText = workStatus ? 'На смене' : 'Не на смене'
  const workStatusClasses = classNames('aside__value',
    workStatus ? 'aside__value--active' : 'aside__value--inactive'
  )

  return (
    <div className='aside'>
      <div className='aside__title'>
        <div className='aside__name'>{userName}</div>
        <div className='aside__sub-name'>Перевозчик</div>
      </div>

      <div className='aside__grid'>
        <div className='aside__info'>Уровень навыка</div>
        <div className='aside__value'>{lvl}</div>

        <div className='aside__info'>Для повышения</div>
        <div className='aside__value'>
          {progress}/<span className='next-lvl'>{nextLvl}</span>
        </div>

        <div className='aside__info'>Рейтинг</div>
        <div className='aside__value'>{rating}</div>

        <div className='aside__info'>Перевезено</div>
        <div className='aside__value'>{transported}</div>

        <div className='aside__info'>На линии</div>
        <div className='aside__value'>{workTime}</div>

        <div className='aside__info'>Смена</div>
        <div className={workStatusClasses}>{workStatusText}</div>

        <div className='aside__info'>Автомобиль</div>
        <div className='aside__value'>{car}</div>

        <div className='aside__info'>Класс</div>
        <div className='aside__value'>{carClass}</div>

        <div className='aside__info'>Тариф</div>
        <div className='aside__value'>${rate}/км</div>
      </div>

      <div className={buttonClasses} onClick={store.changeStatus}>
        <div className='text'>{buttonText}</div>
      </div>
    </div>
  )
})