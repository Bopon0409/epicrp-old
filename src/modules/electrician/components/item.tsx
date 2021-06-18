import React              from 'react'
import { observer }       from 'mobx-react-lite'
import { IItem, TFigure } from '../models'
import { store }          from '../electrician-store'

import figureImg1  from '../img/electrician1.svg'
import figureImg2  from '../img/electrician2.svg'
import figureImg3  from '../img/electrician3.svg'
import figureImg4  from '../img/electrician4.svg'
import figureImg11 from '../img/electrician11.svg'
import figureImg12 from '../img/electrician12.svg'
import figureImg13 from '../img/electrician13.svg'
import figureImg14 from '../img/electrician14.svg'
import figureImg21 from '../img/electrician21.svg'
import figureImg22 from '../img/electrician22.svg'
import figureImg23 from '../img/electrician23.svg'
import figureImg24 from '../img/electrician24.svg'

export const Item = observer((props: { item: IItem }) => {
  const { rotation, figure, position } = props.item
  const handler = () => store.rotate(position)
  const css = { transform: `rotate(${(rotation * 90) - 90}deg)` }

  return (
    <div className='item' style={css} onClick={handler}>
      <Figure figure={figure} />
    </div>
  )
})

function Figure (props: { figure: TFigure }) {
  switch (props.figure) {
    case 1:
      return <img src={figureImg1} alt='' className='figure' />
    case 2:
      return <img src={figureImg2} alt='' className='figure' />
    case 3:
      return <img src={figureImg3} alt='' className='figure' />
    case 4:
      return <img src={figureImg4} alt='' className='figure' />
    case 11:
      return <img src={figureImg11} alt='' className='figure' />
    case 12:
      return <img src={figureImg12} alt='' className='figure' />
    case 13:
      return <img src={figureImg13} alt='' className='figure' />
    case 14:
      return <img src={figureImg14} alt='' className='figure' />
    case 21:
      return <img src={figureImg21} alt='' className='figure' />
    case 22:
      return <img src={figureImg22} alt='' className='figure' />
    case 23:
      return <img src={figureImg23} alt='' className='figure' />
    case 24:
      return <img src={figureImg24} alt='' className='figure' />
  }
}