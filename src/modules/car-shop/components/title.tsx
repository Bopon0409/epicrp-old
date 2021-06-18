import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../car-shop-store'

export const Title = observer(() =>
  <div className='title'>
    <div className='title__header'>Автосалон</div>
    <div className='title__name'>{store.state.businessName}</div>
  </div>
)