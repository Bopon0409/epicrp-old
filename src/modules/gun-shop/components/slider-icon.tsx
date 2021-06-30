import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../gun-shop-store'

export interface SliderIconProps {
  type: 'left' | 'right'
  active: boolean
}

export const SliderIcon = observer((props: SliderIconProps) => {
  const { type, active } = props
  const { sliderDecrement, sliderIncrement } = store
  switch (type) {
    case 'right':
      return (
        <svg width='52' height='24' viewBox='0 0 52 24'
          onClick={sliderIncrement}>
          <path
            d='M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807612 39.9792 0.807612 39.3934 1.3934C38.8076 1.97918 38.8076 2.92893 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM0 13.5L50 13.5V10.5L0 10.5L0 13.5Z'
            fill='white' fillOpacity={active ? 1 : 0.25} />
        </svg>
      )
    case 'left':
      return (
        <svg width='52' height='24' viewBox='0 0 52 24'
          onClick={sliderDecrement}>
          <path
            d='M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.39339C12.0208 0.807608 11.0711 0.807608 10.4853 1.39339L0.939339 10.9393ZM52 10.5L2 10.5L2 13.5L52 13.5L52 10.5Z'
            fill='white' fillOpacity={active ? 1 : 0.25} />
        </svg>
      )
    default:
      return null
  }
})