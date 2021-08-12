import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from '../inventory-store'
import InputRange           from 'react-input-range'
import modalIcon            from '../images/modal-icon.svg'
import cn                   from 'classnames'

export const Modal = observer(() => {
  const {
    state: { modal }, separateActive, modalUseBtn,
    canSeparate, canRemove, modalSetActiveBtn, modalSetRange, modalSubmit
  } = store

  // Закрытие модального окна на клик вокруг
  useEffect(() => {
    const clickOutside = (e: any) => {
      const modalBlock = document.getElementsByClassName('modal')[0]
      if (!e.path.includes(modalBlock)) store.modalClose()
    }
    document.addEventListener('click', clickOutside)
    return () => document.removeEventListener('click', clickOutside)
  }, [])

  if (!modal) return null
  const { x, y, position, range, activeBtn, item } = modal

  // Обработчики кнопок
  const useHandler = () => modalSetActiveBtn('use')
  const separateHandler = () => modalSetActiveBtn('separate')
  const removeHandler = () => modalSetActiveBtn('remove')

  // Стили кнопок
  const useCn = cn('modal__button',
    activeBtn === 'use' && 'modal__button--active'
  )
  const separateCn = cn('modal__button',
    activeBtn === 'separate' && 'modal__button--active'
  )
  const removeCn = cn('modal__button',
    activeBtn === 'remove' && 'modal__button--active'
  )

  return (
    <div className='modal' style={{ left: x, top: y }}>
      <div className='modal__info'>
        <div className='modal__icon-container'>
          <img src={modalIcon} alt='' className='modal__icon' />
        </div>
        <div className='modal__text'>
          <div className='modal__name'>{item.name} ({item.quantity})</div>
          <div className='modal__description'>{item.description}</div>
          <div className='modal__weight'>
            {(item.quantity * item.weight).toFixed(1)} КГ
          </div>
        </div>
      </div>

      <div className='modal__button-container'>
        {modalUseBtn !== null && (
          <div className={useCn} onClick={useHandler}>
            <div className='text'>{modalUseBtn}</div>
          </div>
        )}

        {canSeparate(item, position) && (
          <div className={separateCn} onClick={separateHandler}>
            <div className='text'>Разделить</div>
          </div>
        )}

        {canRemove(item, position) && (
          <div className={removeCn} onClick={removeHandler}>
            <div className='text'>Выбросить</div>
          </div>
        )}
      </div>

      {separateActive && (
        <div className='modal__slider-container'>
          <div className='modal__slider-title'>Выберете нужное количество</div>
          <div className='modal__input-container'>
            <InputRange
              onChange={(range) => modalSetRange(Number(range))}
              value={range} minValue={0} maxValue={item.quantity} />
            <input type='text' className='modal__input' value={range.toString()}
              onChange={e => modalSetRange(e.target.value)} />
          </div>
        </div>
      )}

      {activeBtn && (
        <div className='modal__button-container'>
          <div className='modal__button' onClick={modalSubmit}>
            <div className='text'>Подтвердить</div>
          </div>
        </div>
      )}
    </div>
  )
})