import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../gun-shop-store'
import cn           from 'classnames'

export const Menu = observer(() => {
  const { state: { categories, menuItem }, setMenuItem } = store
  const items = [
    'Холодное оружие', 'Пистолеты', 'Пистолеты - пулемёты',
    'Дробовики', 'Автоматическое', 'Снаряжение'
  ]

  return (
    <div className='menu'>{
      categories.map(({ id }) => {
        const active = id === menuItem
        const classes = cn('menu__item', active && 'menu__item--active')
        return (
          <div className={classes} onClick={() => setMenuItem(id)} key={id}>
            <div className='menu__title'>{items[id]}</div>
          </div>
        )
      })
    }</div>
  )
})