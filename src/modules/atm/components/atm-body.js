import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../atm-store'
import Menu         from './menu'
import Transfer     from './transfer'
import backArrow    from '../images/back-arrow.svg'
import { Services } from './services'

export default observer(() => {
  const { currentPage } = store.state

  const isMenu = currentPage === 'Главное меню'
  const isServices = currentPage === 'Оплата услуг'
  const isTransfer =
    currentPage === 'Снятие наличных' ||
    currentPage === 'Перевод средств' ||
    currentPage === 'Пополнить счёт' ||
    currentPage === 'Оплатить счёта телефона' ||
    currentPage === 'Оплата жилья' ||
    currentPage === 'Оплата бизнеса'

  return (
    <div className='atm__body'>
      <div className='body__header'>
        <div className='body__title'>{currentPage}</div>
        {currentPage !== 'Главное меню' && (
          <div
            className='body__back-btn'
            onClick={store.backButtonHandler}
          >
            <img src={backArrow} alt='' className='body__back-arrow' />
            <div className='body__back-text'>Назад</div>
          </div>
        )}
      </div>
      <div className='body__header-line' />

      {isServices && <Services />}
      {isMenu && <Menu />}
      {isTransfer && <Transfer />}
    </div>
  )
})
