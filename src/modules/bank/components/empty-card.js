import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../bank-store'
import EmptyCardSvg from '../svg/empty-card'

export default observer(() =>
  <div className='card-wrapper' onClick={store.createCardOpen}>
    <EmptyCardSvg />
  </div>
)