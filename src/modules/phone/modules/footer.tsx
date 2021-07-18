import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'

export const Footer = observer(() => {
  const { buttonLabels } = store
  return (
    <div className='footer'>
      <div className='footer__item'>{buttonLabels[0]}</div>
      <div className='footer__item'>{buttonLabels[1]}</div>
      <div className='footer__item'>{buttonLabels[2]}</div>
    </div>
  )
})