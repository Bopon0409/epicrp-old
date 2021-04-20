import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../../../store/atm/atm-store'
import Menu from './menu'
import Transfer from './transfer'
import backArrow from '../images/back-arrow.svg'


export default observer(() => {
  const { currentPage } = store.state
  const { setCurrentPage } = store

  const isMenu = currentPage === 'Главное меню'
  const isTransfer =
    currentPage === 'Снятие наличных' ||
    currentPage === 'Перевод средств' ||
    currentPage === 'Пополнить счёт'

  return (
    <div className='atm__body'>
      <div className='body__header'>
        <div className='body__title'>{currentPage}</div>
        {currentPage !== 'Главное меню' && (
          <div
            className='body__back-btn'
            onClick={() => setCurrentPage('Главное меню')}
          >
            <img src={backArrow} alt='' className='body__back-arrow' />
            <div className='body__back-text'>Назад</div>
          </div>
        )}
      </div>
      <div className='body__header-line' />

      {isMenu && <Menu />}
      {isTransfer && <Transfer />}
    </div>
  )
})
