import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import store from '../../../store/inventory/inventory-store'
import InputRange from 'react-input-range'
import icon from '../images/modal-icon.svg'

export default observer(() => {
  const { item, xCord, yCord, action, sliderValue } = store.state.modal
  const { toggleModalAction, setModalSliderValue } = store
  const { modalAction, setModal } = store
  const weight = (item?.weight * item?.quantity).toFixed(1)

  useEffect(() => {
    const сlickOutside = e => {
      const modalBlock = document.getElementsByClassName('modal')[0]
      if (!e.path.includes(modalBlock)) store.setModal(false, {}, 0, 0)
    }
    setTimeout(
      () => document.addEventListener('click', сlickOutside, false),
      100
    )
    return () => document.removeEventListener('click', сlickOutside, false)
  }, [])

  const style = {
    left: window.innerWidth - xCord > 380 ? xCord : xCord - 380,
    top:
      window.innerHeight - yCord < 360 && item?.quantity > 1
        ? yCord - 360
        : yCord
  }

  return (
    <>
      <div className='modal' style={style}>
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

        <div className='modal__btn-container'>
          <div
            className={
              action === 'use' ? 'modal__btn modal__btn_active' : 'modal__btn'
            }
            onClick={() => toggleModalAction('use')}
          >
            Использовать
          </div>
          {item.quantity > 1 && (
            <div
              className={
                action === 'separate'
                  ? 'modal__btn modal__btn_active'
                  : 'modal__btn'
              }
              onClick={() => toggleModalAction('separate')}
            >
              Разделить
            </div>
          )}
          <div
            className={
              action === 'drop' ? 'modal__btn modal__btn_active' : 'modal__btn'
            }
            onClick={() => toggleModalAction('drop')}
          >
            Выбросить
          </div>
        </div>

        {action === 'separate' && (
          <div className='modal__slider'>
            <div className='slider__title'>Разделение предмета</div>
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
        )}

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
