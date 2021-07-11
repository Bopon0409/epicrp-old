import React        from 'react'
import { observer } from 'mobx-react-lite'
import creditIcon1  from '../images/credit-icon1.svg'
import creditIcon2  from '../images/credit-icon2.svg'
import creditIcon3  from '../images/credit-icon3.svg'

export const CreditEmpty = observer(() => {
  return (
    <div className='credit-empty'>
      <div className='title'>У вас нет активного кредита</div>
      <div className='subtitle'>Для оформления кредита требуется:</div>

      <div className='requirement'>
        <div className='requirement__item'>
          <div className='requirement__icon-container'>
            <div className='requirement__icon'>5</div>
          </div>
          <div className='requirement__text-container'>
            <div className='requirement__text'>Проживать в штате пять лет
            </div>
          </div>
        </div>

        <div className='requirement__item'>
          <div className='requirement__icon-container'>
            <img className='requirement__icon' alt='' src={creditIcon1} />
          </div>
          <div className='requirement__text-container'>
            <div className='requirement__text'>Иметь залоговое имущество</div>
          </div>
        </div>

        <div className='requirement__item'>
          <div className='requirement__icon-container'>
            <img className='requirement__icon' alt='' src={creditIcon2} />
          </div>
          <div className='requirement__text-container'>
            <div className='requirement__text'>
              Быть работником одной из организаций
            </div>
          </div>
        </div>

        <div className='requirement__item'>
          <div className='requirement__icon-container'>
            <img className='requirement__icon' alt='' src={creditIcon3} />
          </div>
          <div className='requirement__text-container'>
            <div className='requirement__text'>
              Иметь хорошую кредитную историю
            </div>
          </div>
        </div>
      </div>

      <div className='button'>
        <div className='text'>Построить маршрут до ближайшего банка</div>
      </div>
    </div>
  )
})