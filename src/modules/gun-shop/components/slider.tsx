import React          from 'react'
import { observer }   from 'mobx-react-lite'
import { store }      from '../gun-shop-store'
import { SliderIcon } from './slider-icon'

export const Slider = observer(() => {
  const { currentGun, cartAddGun, sliderStatus } = store
  if (!currentGun) return null

  return (
    <div className='slider'>
      <div className='slider__container'>
        <SliderIcon type={'left'} active={sliderStatus[0]} />
        <div className='slider__name'>{currentGun.name}</div>
        <SliderIcon type={'right'} active={sliderStatus[1]} />
      </div>
      <div className='slider__price'>Стоимость: ${currentGun.price}</div>
      <div className='slider__button' onClick={() => cartAddGun()}>
        <div className='text'>Добавить в корзину</div>
      </div>
    </div>
  )
})