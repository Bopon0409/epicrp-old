import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../shop-store'

interface TSelectProp {
  selectActive: boolean,
  setSelectActive: any
}

export const Select = observer((props: TSelectProp) => {
  const { selectActive, setSelectActive } = props
  const { setPayment, state: { money } } = store
  const active = money.cards.length && selectActive

  const handler = (i: number) => {
    setPayment(i === 0 ? 'card1' : 'card2')
    setSelectActive(!selectActive)
  }

  return active ? (
    <div className='select'>
      {money.cards.map((card, i) =>
        <div onClick={() => handler(i)} className='select-item' key={i}>
          <div className='select__name'>{card.cardName}</div>
          <div className='select__name'>{card.balance}$</div>
        </div>
      )}
    </div>
  ) : null
})