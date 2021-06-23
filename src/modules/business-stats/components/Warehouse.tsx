import { observer } from 'mobx-react-lite'
import React from 'react'
import cn from 'classnames';

import { store } from '../business-stats-store'

export const Warehouse = observer(() => {
  return (
    <div className='warehouse'>
      <div className='warehouse-left_block'>
        <div className='block_name'>ТОВАРЫ НА СКЛАДЕ</div>
        <div className='items_list'>
            { store.state.warehouse?.ItemsInStock.map((item, i) => (
                <div className='item'>
                    <div className='item-name'>{item.name}</div>
                    <div className={cn('item-amount',
                    {['red']: item.amount === 0, ['yellow']: (item.amount < 50 && item.amount > 0),
                    ['blue']: item.amount > 50})}>
                        {item.amount > 0 ? item.amount+" шт" : 'закончился'}
                    </div>
                </div>
            ))}
        </div>
      </div>
      <div className='warehouse-right_block'></div>
    </div>
  )
})
