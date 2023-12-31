import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../fraction-store'
import Info         from './info'
import MembersList  from './members-list'
import Activity     from './activity'
import Storage      from './storage'
import Group        from './group'
import Cars         from './cars'
import RankSettings from './rank-settings'

export default observer(() => {
  const getCurrentBlock = () => {
    switch (store.state.activeMenuItem) {
      case 0:
        return <Info />
      case 1:
        return <MembersList />
      case 2:
        return <Activity />
      case 3:
        return <Group />
      case 4:
        return <Cars />
      case 5:
        return <Storage />
      case 6:
        return <RankSettings />
      default:
        return null
    }
  }

  return <div className='body'>{getCurrentBlock()}</div>
})
