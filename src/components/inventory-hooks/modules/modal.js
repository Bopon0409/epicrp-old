import { observer } from 'mobx-react-lite'
import React from 'react'
import store from '../../../store/inventory/inventory-store'
import InputRange from 'react-input-range'

export default observer(() => {
  const {
    modal: { isActive, item, xCord, yCord, action }
  } = store.state

  const { toggleModalAction } = store

  const weight = (item.weight * item.quantity).toFixed(1)

  const style = {
    display: isActive ? 'block' : 'none',
    left: xCord,
    top: yCord
  }

  return (
    <div className='modal' style={style}>
      <div className='modal__weight'>{weight}</div>

      <div className='modal__body'>
        <img src='' alt='' className='modal__icon' />
        <div className='modal__title'>item.name</div>
        <div className='modal__text'>item.description</div>
      </div>

      <div className='modal__btn-container'>
        <div
          className={action === 'use' ? 'modal__btn' : 'modal__btn'}
          onClick={() => toggleModalAction('use')}
        >
          Использовать
        </div>
        <div
          className={action === 'separate' ? 'modal__btn' : 'modal__btn'}
          onClick={() => toggleModalAction('separate')}
        >
          Разделить
        </div>
        <div
          className={action === 'drop' ? 'modal__btn' : 'modal__btn'}
          onClick={() => toggleModalAction('drop')}
        >
          Выбросить
        </div>
      </div>

      {action === 'separate' && (
        <div className='modal__slider'>
          <InputRange />
        </div>
      )}

      {(action === 'drop' || action === 'separate') && (
        <div className='modal__confirm'>
          <div className='modal__btn'>Подтвердить</div>
        </div>
      )}
    </div>
  )
})
