import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'
import { store }           from '../shop-store'
import classNames          from 'classnames'
import selectIcon          from '../image/select_icon.svg'
import { SectionList }     from './section-list'
import { Select }          from './select'

export const Aside = observer(() => {
  const { setPayment, buy, funds, state: { businessId, payment } } = store

  const [selectActive, setSelectActive] = useState(false)
  const selectHandler = () => setSelectActive(!selectActive)
  const selectIconStyle = { transform: selectActive ? '' : 'rotate(180deg)' }

  const cashClassNames = classNames('button',
    payment === 'cash' && 'button--active'
  )
  const cardClassNames = classNames('button', 'button--relative',
    payment !== 'cash' && 'button--active'
  )

  return (
    <div className='aside'>
      <div className='title'>
        <div className='title__number'>#{businessId}</div>
        <div className='title__name'>Магазин 24/7</div>
      </div>

      <div className='menu'>
        <div className='menu-title'>Меню:</div>
        <SectionList />

        <div className='payment-menu'>
          <div className={cashClassNames} onClick={() => setPayment('cash')}>
            <div className='text'>Наличные</div>
          </div>
          <div className={cardClassNames} onClick={selectHandler}>
            <div className='text'>Карта</div>
            <img src={selectIcon} alt='' className='select-icon'
              style={selectIconStyle} />
          </div>
        </div>

        <Select selectActive={selectActive} setSelectActive={setSelectActive} />

        <div className='money-menu'>
          <div className='hint'>Ваши средства:</div>
          <div className='value'>{funds}</div>
        </div>
        <div className='pay-button-container'>
          <div className='button button--active' onClick={buy}>
            <div className='text'>Оплатить</div>
          </div>
        </div>
      </div>
    </div>
  )
})