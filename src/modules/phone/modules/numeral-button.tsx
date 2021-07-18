import React              from 'react'
import { observer }       from 'mobx-react-lite'
import { store }          from '../phone-store'

import button0            from '../img/btn-0.svg'
import button1            from '../img/btn-1.svg'
import button2            from '../img/btn-2.svg'
import button3            from '../img/btn-3.svg'
import button4            from '../img/btn-4.svg'
import button5            from '../img/btn-5.svg'
import button6            from '../img/btn-6.svg'
import button7            from '../img/btn-7.svg'
import button8            from '../img/btn-8.svg'
import button9            from '../img/btn-9.svg'
import buttonStar         from '../img/btn-star.svg'
import buttonLattice      from '../img/btn-lattice.svg'
import { TNumeralButton } from '../model'

export interface IBtnProps {
  type: TNumeralButton
}

export const NumeralButton = observer((props: IBtnProps) => {
  const { numeralBtnHandler } = store
  const { type } = props
  const handler = () => numeralBtnHandler(type)

  switch (type) {
    case '0':
      return <div className='numeral-btn' onClick={handler}>
        <img src={button0} alt='' />
      </div>
    case '1':
      return <div className='numeral-btn' onClick={handler}>
        <img src={button1} alt='' />
      </div>
    case '2':
      return <div className='numeral-btn' onClick={handler}>
        <img src={button2} alt='' />
      </div>
    case '3':
      return <div className='numeral-btn' onClick={handler}>
        <img src={button3} alt='' />
      </div>
    case '4':
      return <div className='numeral-btn' onClick={handler}>
        <img src={button4} alt='' />
      </div>
    case '5':
      return <div className='numeral-btn' onClick={handler}>
        <img src={button5} alt='' />
      </div>
    case '6':
      return <div className='numeral-btn' onClick={handler}>
        <img src={button6} alt='' />
      </div>
    case '7':
      return <div className='numeral-btn' onClick={handler}>
        <img src={button7} alt='' />
      </div>
    case '8':
      return <div className='numeral-btn' onClick={handler}>
        <img src={button8} alt='' />
      </div>
    case '9':
      return <div className='numeral-btn' onClick={handler}>
        <img src={button9} alt='' />
      </div>
    case 'lattice':
      return <div className='numeral-btn' onClick={handler}>
        <img src={buttonLattice} alt='' />
      </div>
    case 'star':
      return <div className='numeral-btn' onClick={handler}>
        <img src={buttonStar} alt='' />
      </div>
    default:
      return null
  }
})