import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'
import { store }           from '../shop-store'
import classNames          from 'classnames'
import { ICard }           from '../models'
import selectIcon          from '../image/select_icon.svg'

export const Aside = observer(() => {
  const [selectActive, setSelectActive] = useState(false)
  const { setSection, setPayment, funds } = store
  const {
    sectionList, sectionCurrent, businessId, payment, money
  } = store.state

  const sectionListView = sectionList
    .map(({ sectionName, sectionId }, i) => {
      const itemClasses = classNames('button',
        sectionId === sectionCurrent && 'button--active'
      )
      const handler = () => setSection(sectionId)
      return (
        <div className={itemClasses} onClick={handler} key={i}>
          {sectionName}
        </div>
      )
    }
  )

  const selectView = money.cards.length && selectActive ? (
    <div className='select'>{
      money.cards.map(({ balance, cardName, accountId }: ICard, i) =>
        <div onClick={() => setPayment(i === 0 ? 'card1' : 'card2')}
          className='select-item' key={i}>
          <div className='select__name'>{cardName}</div>
          <div className='select__name'>{balance}$</div>
        </div>
      )
    }
    </div>) : null

  return (
    <div className='aside'>
      <div className='title'>
        <div className='title__number'>#{businessId}</div>
        <div className='title__name'>Магазин 24/7</div>
      </div>
      <div className='menu'>
        <div className='menu-list'>{sectionListView}</div>
        <div className='payment-menu'>
          <div className={classNames('button',
            payment === 'cash' && 'button--active'
          )}>
            <div className='text'>Наличные</div>
          </div>
          <div className={classNames('button',
            payment !== 'cash' && 'button--active'
          )} onClick={() => setSelectActive(!selectActive)}>
            <div className='text'>Карта</div>
            <img src={selectIcon} alt='' className='select-icon' style={{
              transform: selectActive ? '' : 'rotate(180deg)'
            }} />
            {selectView}
          </div>
        </div>
        <div className='money-menu'>
          <div className='hint'>Ваши средства:</div>
          <div className='value'>{funds}</div>
        </div>
        <div className='pay-button-container'>
          <div className='button'>
            <div className='text'>Оплатить</div>
          </div>
        </div>
      </div>
    </div>
  )
})