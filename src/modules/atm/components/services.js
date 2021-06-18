import React        from 'react'
import { observer } from 'mobx-react-lite'
import MenuItem     from './menu-item'

export const Services = observer(() => {
  const itemsData = [
    {
      title: 'Оплатить счёта телефона',
      text: 'Пополнение счёта вашего мобильного телефона'
    },
    {
      title: 'Оплата жилья',
      text: 'Оплата налога Вашего дома'
    },
    {
      title: 'Оплата бизнеса',
      text: 'Оплата налога на Ваш бизнес'
    }
  ]

  return (
    <div className='menu__container'>
      <div className='menu__col'>
        <MenuItem data={itemsData[0]} />
        <MenuItem data={itemsData[1]} />
        <MenuItem data={itemsData[2]} />
      </div>
    </div>
  )
})