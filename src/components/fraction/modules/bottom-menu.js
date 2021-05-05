import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'
import UserIcon from './user-icon'

export default observer(() => {
  const { user } = store.state

  return (
    <div className='bottom-menu'>
      <UserIcon size='37px' online={true} name={user.name} />
      <div className='text'>
        <div className='text__name'>{user.name}</div>
        <div className='text__rank'>{user.rankName}</div>
      </div>
      <div className='settings' onClick={() => store.setSettingsMode(true)}>
        <Icon icon='settings' />
      </div>
    </div>
  )
})
