import { observer }         from 'mobx-react-lite'
import React, { useEffect } from 'react'
import store                from '../inventory-store'
import InputRange           from 'react-input-range'
import icon                 from '../images/modal-icon.svg'

export default observer(() => {
  const { item, xCord, yCord, action, sliderValue } = store.state.modal
  const { toggleModalAction, setModalSliderValue } = store
  const { modalAction, setModal, useLabel } = store
  const weight = (item?.weight * item?.quantity).toFixed(1)

  console.log(store.state.trade.isReady1, item.idSlot)
  const isDisabled = (item.idSlot >= 351 && item.idSlot <= 360) ||
    (store.state.trade.isReady1 && item.idSlot >= 301 && item.idSlot <= 310)

  const useBtnRender = item.usable || item.equipmentSlot || item.isFastSlot
  const separateBtnRender = item.quantity > 1

  useEffect(() => {
    const clickOutside = e => {
      const modalBlock = document.getElementsByClassName('modal')[0]
      if (!e.path.includes(modalBlock)) store.setModal(false, {}, 0, 0)
    }
    document.addEventListener('click', clickOutside, false)
    return () => document.removeEventListener('click', clickOutside, false)
  }, [])

  return (
    <>
      <div className='modal' style={{ left: xCord, top: yCord }}>
        <div className='modal__info'>
          <div className='modal__weight'>{weight} КГ</div>

          <img src={icon} alt='' className='modal__icon' />

          <div className='modal__body'>
            <div className='modal__title'>
              {item.name} ({item.quantity})
            </div>
            <div className='modal__text'>{item.description}</div>
          </div>
        </div>

        {!isDisabled && <div className='modal__btn-container'>
          {useBtnRender ? <div className={
            action === 'use' ? 'modal__btn modal__btn_active' : 'modal__btn'
          } onClick={() => toggleModalAction('use')}>
            {useLabel}
          </div> : null}

          {separateBtnRender && <div className={action === 'separate'
            ? 'modal__btn modal__btn_active'
            : 'modal__btn'}
            onClick={() => toggleModalAction('separate')}>
            Разделить
          </div>
          }
          <div
            className={
              action === 'drop' ? 'modal__btn modal__btn_active' : 'modal__btn'
            }
            onClick={() => toggleModalAction('drop')}
          >
            Выбросить
          </div>
        </div>}

        {action === 'separate' || (action === 'drop' && item.quantity > 1) ? (
          <div className='modal__slider'>
            <div className='slider__title'>Выберете количество</div>
            <div className='slider__text'>
              Перетяните ползунок до необходимого значения, либо введите число
              вручную
            </div>
            <InputRange
              maxValue={item.quantity - 1}
              minValue={0}
              value={sliderValue}
              onChange={value => setModalSliderValue(value)}
            />
          </div>
        ) : null}

        {action !== '' && !(action === 'separate' && sliderValue === 0) && (
          <div className='modal__confirm'>
            <div
              className='modal__btn'
              onClick={() => {
                modalAction(item.idSlot)
                setModal(false, {}, 0, 0)
              }}
            >
              Подтвердить
            </div>
          </div>
        )}
      </div>
    </>
  )
})
