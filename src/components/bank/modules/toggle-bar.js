import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/bank/bank-store'
import MainMenuItemSvg from '../svg/control-action-icon'

export default observer(({ type }) => {
  const { controlActions, paymentForServices, transfer } = store.state.toggles
  let current, handler
  let isIcons = false
  let title = null

  switch (type) {
    case 'control-actions':
      current = controlActions
      handler = store.setControlActionsToggle
      isIcons = true
      break
    case 'payment-for-services':
      current = paymentForServices
      handler = store.setPaymentForServicesToggle
      title = 'Оплата услуг'
      break
    case 'transfer':
      current = transfer
      handler = store.setTransferToggle
      title = 'Перевод на счета'
      break
    default:
      return null
  }

  return (
    <>
      {title && <div className='toggle-bar__title'>{title}</div>}
      <div className='toggle-bar__container'>
        <div
          onClick={() => handler(1)}
          className={
            current === 1
              ? 'toggle-bar__btn toggle-bar__btn_active'
              : 'toggle-bar__btn'
          }
        >
          {isIcons && <MainMenuItemSvg num={1} active={current === 1} />}
          <div className='toggle-bar__text'>Пополнить счёт</div>
          <div className='toggle-bar__line' />
        </div>
        <div
          onClick={() => handler(2)}
          className={
            current === 2
              ? 'toggle-bar__btn toggle-bar__btn_active'
              : 'toggle-bar__btn'
          }
        >
          {isIcons && <MainMenuItemSvg num={2} active={current === 2} />}
          <div className='toggle-bar__text'>Обналичить счёт</div>
          <div className='toggle-bar__line' />
        </div>
      </div>
    </>
  )
})
