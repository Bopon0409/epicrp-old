import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'

export default observer(() => {
  const { title, icon } = store.getMenuItem()
  const { activeMenuItem, searchValue } = store.state

  const isSearchVision = activeMenuItem === 0 || activeMenuItem === 1
  const isCloseVision = activeMenuItem === 5 || activeMenuItem === 6

  const searchView = isSearchVision && (
    <div className='header__search'>
      <input
        className='header__input'
        placeholder='Поиск сотрудников'
        value={searchValue}
        onChange={store.setSearchValue}
      />
      <Icon icon='search' />
    </div>
  )

  const closeView = isCloseVision && (
    <div className='close' onClick={() => store.setSettingsMode(false)}>
      <Icon icon='close' />
    </div>
  )

  return (
    <div className='header'>
      <div className='header__title'>
        <Icon icon={icon} />
        <div className='header__text'>{title}</div>
      </div>
      {searchView}
      {closeView}
    </div>
  )
})
