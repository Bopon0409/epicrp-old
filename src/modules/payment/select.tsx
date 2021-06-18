import React        from 'react'
import { observer } from 'mobx-react-lite'
import classNames   from 'classnames'
import { IMoney }   from './models'
import { store }    from './payment-store'

export interface SelectProps {
  money: IMoney
}

export const Select = observer((props: SelectProps) => {
  const selectList = props.money.cards?.map((card) => {
    const handler = () => store.selectItemHandler(card, props.money)
    const active = store.state.currentCard === card.accountId
    const classes = classNames('item', active && 'item--active')

    return (
      <div className={classes} onClick={handler} key={card.accountId}>
        <div className='select__value'>{card.cardName}</div>
        <div className='select__value'>{card.balance}</div>
      </div>
    )
  })

  return store.state.selectActive ? (
    <div className='select'>{selectList}</div>
  ) : null
})