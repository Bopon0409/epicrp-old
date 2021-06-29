import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../gun-shop-store'
import { MenuItem } from './menu-item'

export const Menu = observer(() => {
  const { state: { categories, menuItem }, setMenuItem } = store
  return (
    <div className='menu'>{
      categories.map(({ id }) => (
        <MenuItem num={id} handler={setMenuItem} active={id === menuItem} />
      ))
    }</div>
  )
})