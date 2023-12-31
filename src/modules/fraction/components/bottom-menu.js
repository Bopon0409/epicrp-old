import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'
import UserIcon from './user-icon'

export default observer(() => {
  const { name, rankNum, id } = store.user
  const rankName = store.getRankName(rankNum)
  const color = store.getMemberColor(id)

  return (
    <div className='bottom-menu'>
      <UserIcon size='37px' online={true} name={name} color={color} />
      <div className='text'>
        <div className='text__name' style={{ color }}>
          {name}
        </div>
        <div className='text__rank'>{rankName}</div>
      </div>
      <div className='settings' onClick={() => store.setSettingsMode(true)}>
        <Icon icon='settings' />
      </div>
    </div>
  )
})
