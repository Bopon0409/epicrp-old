import React    from 'react'
import MenuItem from './menu-item'

export default function Menu () {
  const itemsData1 = [
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

  const itemsData2 = [
    {
      title: 'Оплата услуг',
      text: 'Оплата различных услуг'
    },
    {
      title: 'Функция недоступна',
      text: 'Функция недоступна'
    },
    {
      title: 'Выход'
    }
  ]

  const col1 = itemsData1
    .filter((_, i) => i <= 2)
    .map((el, i) => <MenuItem key={i} data={{ id: i + 1, ...el }} />)

  return (
    <div className='menu__container'>
      <div className='menu__col'>{col1}</div>
      <div className='menu__col'>
        <MenuItem data={itemsData2[0]} />
        <MenuItem data={itemsData2[1]} />
        <MenuItem data={itemsData2[2]} />
      </div>
    </div>
  )
}
