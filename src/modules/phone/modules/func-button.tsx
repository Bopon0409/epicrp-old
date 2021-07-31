import React        from 'react'
import { observer } from 'mobx-react-lite'
import btnLeft      from '../img/btn-left.svg'
import btnCenter    from '../img/btn-center.svg'
import btnRight     from '../img/btn-right.svg'
import { store }    from '../phone-store'

export interface IProps {
  type: 'left' | 'center' | 'right'
}

export const FuncButton = observer((props: IProps) => {
  const { type } = props
  const { funcButtonCenter, funcButtonRight, funcButtonLeft } = store

  switch (type) {
    case 'left':
      return (
        <div className='func-button' onClick={funcButtonLeft}>
          <img src={btnLeft} alt='' />
        </div>
      )
    case 'center':
      return (
        <div className='func-button' onClick={funcButtonCenter}>
          <img src={btnCenter} alt='' />
        </div>
      )
    case 'right':
      return (
        <div className='func-button' onClick={funcButtonRight}>
          <img src={btnRight} alt='' />
        </div>
      )
    default:
      return null
  }
})