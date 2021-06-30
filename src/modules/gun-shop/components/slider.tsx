import React          from 'react'
import { observer }   from 'mobx-react-lite'
import { store }      from '../gun-shop-store'
import { SliderIcon } from './slider-icon'

export const Slider = observer(() => {
  const { currentGun } = store
  if (!currentGun) return null

  return (
    <div className='slider'>
      <div className='slider__container'>
        <SliderIcon type={'left'} active={true} />
        <div className='slider__name'>{currentGun.name}</div>
        <SliderIcon type={'right'} active={true} />
      </div>
      <div className='slider__price'>{currentGun.price}</div>
      <div className='slider__button'>
        <div className='text'>Добавить в корзину</div>
      </div>
    </div>
  )
})