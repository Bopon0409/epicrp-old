import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../fraction-store'
import Icon from './icon'
import classNames from 'classnames'
import Switch from 'react-switch'

export default observer(() => {
  const { active, id, currentRank } = store.state.modalGroupEdit
  const {
    groupSettingsClose, settingsList, setGroupSettingCurrentRank,
    toggleRankSetting
  } = store
  const group = store.getGroupById(id)

  const ranksList = group?.ranks.map(({ rankNum }, i) => {
      const rank = store.getRankById(rankNum)
      const active = rankNum === currentRank
      const classes = classNames('rank__item', active && 'rank-active')
      const handler = () => setGroupSettingCurrentRank(rankNum)

      return <div className={classes} key={i} onClick={handler}>
        <div className='color' style={{ background: rank.color }} />
        <div className='name'>{rank.rankName}</div>
      </div>
    }
  )

  const settingsListView = settingsList?.map((item, i) => {
    const { settingName, settingDescription, value } = item
    return <div className='setting__item' key={i}>
      <div className='setting__info'>
        <div className='name'>{settingName}</div>
        <div className='description'>{settingDescription}</div>
      </div>
      <div className='toggle'>
        <Switch
          onChange={() => toggleRankSetting(settingName)}
          checked={value}
          className='setting-switch'
        />
      </div>
    </div>
  })

  return active ? (
    <div className='group-settings'>
      <div className='close-btn' onClick={groupSettingsClose}>
        <Icon icon='close' />
      </div>
      <div className='title'>Настройки отдела</div>
      <div className='wrap'>
        <div className='ranks'>
          <div className='menu-title'>Ранги</div>
          <div className='ranks-list scroll'>{ranksList}</div>
        </div>
        <div className='settings'>
          <div className='menu-title'>Функции</div>
          <div className='settings-list scroll'>
            {settingsListView}
          </div>
        </div>
      </div>
    </div>
  ) : null
})