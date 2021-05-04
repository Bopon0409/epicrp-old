import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'

export default observer(() => {
  const { title, icon } = store.getMenuItem()

  return (
    <div className='header'>
      <div className='header__title'>
        <Icon icon={icon} />
        <div className='header__text'>{title}</div>
      </div>
      <div className='header__search'>
        <input
          className='header__input'
          placeholder='Поиск сотрудников'
          value={store.state.searchValue}
          onChange={store.setSearchValue}
        />
        <Icon icon='search' />
      </div>
    </div>
  )
})
