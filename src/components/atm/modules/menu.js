import React from 'react'
import MenuItem from './menu-item'

export default function Menu () {
  const itemsData = [
    {
      title: 'Пополнить счёт',
      text: 'Пополнение вашего личного счета наличными'
    },
    {
      title: 'Снятие наличных',
      text: 'Обналичивание денег с вашего счета'
    },
    {
      title: 'Перевод средств',
      text: 'Список всех платежей и зачислений'
    }
  ]

  const col1 = itemsData
    .filter((_, i) => i <= 2)
    .map((el, i) => <MenuItem key={i} data={{ id: i + 1, ...el }}/>)

  return (
    <div className='menu__container'>
      <div className='menu__col'>{col1}</div>
      <div className='menu__col'/>
    </div>
  )
}
