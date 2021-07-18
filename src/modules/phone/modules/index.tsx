import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../phone-store'
import cn           from 'classnames'
import menuIcon0    from '../img/menu-item-0.svg'
import menuIcon1    from '../img/menu-item-1.svg'
import menuIcon2    from '../img/menu-item-2.svg'

export const Index = observer(() => {
  const { state: { time, date, currentMenuItem } } = store

  const getCn = (num: number) => cn('index__menu-item',
    num === currentMenuItem && 'index__menu-item--active'
  )

  return (
    <div className='index'>
      <div className='index__time'>{time}</div>
      <div className='index__date'>{date}</div>
      <div className='index__menu'>
        <div className={getCn(0)}>
          <img src={menuIcon0} alt='' />
        </div>
        <div className={getCn(1)}>
          <img src={menuIcon1} alt='' />
        </div>
        <div className={getCn(2)}>
          <img src={menuIcon2} alt='' />
        </div>
      </div>
    </div>
  )
})