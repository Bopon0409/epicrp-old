import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../fraction-store'

export default observer(() => {
  const { active, id, currentRank } = store.state.modalGroupCreate
  const group = store.getGroupById(id)
  const settingsList = group.ranks
    .find(({ rankNum }) => rankNum === currentRank)

  const ranksList = group.ranks.map(({ rankNum }) => {
      const rank = store.getRankById(rankNum)
      return <div className='rank__item'>
        <div className='color' style={{ background: rank.color }} />
        <div className='name'>{rank.rankName}</div>
      </div>
    }
  )

  const settingsListView = settingsList.map(item => {
    const { settingName, settingDescription, value } = item
    return <div className='setting__item'>
      <div className='setting__info'>
        <div className='name'>{settingName}</div>
        <div className='description'>{settingDescription}</div>
      </div>
      <div className='toggle'>
        <div className='toggle__false'>

        </div>
        <div className='toggle__true'>

        </div>
      </div>
    </div>
  })

  return active ? (
    <div className='group-settings'>
      <div className='title'>Настройки отдела</div>
      <div className='wrap'>
        <div className='ranks'>
          <div className='menu-title'>Ранги</div>
          <div className='ranks-list skroll'>{ranksList}</div>
        </div>
        <div className='settings'>
          <div className='menu-title'>Функции</div>
          <div className='settings-list skroll'></div>
        </div>
      </div>
    </div>
  ) : null
})