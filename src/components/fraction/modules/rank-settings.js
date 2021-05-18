import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import Icon                 from './icon'
import store                from '../fraction-store'
import Switch               from 'react-switch'
import classNames           from 'classnames'
import { HexColorPicker }   from 'react-colorful'

const colors = [
  '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E',
  '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E',
  '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E'
]

export default observer(() => {

  useEffect(() => {
    store.setSettingsBuffer('init')
    const { clickOutsideColorPicker: handler } = store
    document.addEventListener('click', handler, false)
    return () => document.removeEventListener('click', handler, false)
  }, [])

  const {
    rankNum, priority, name, colorPicker, color, settingsList
  } = store.state.settings

  const {
    setRankSetting, setSettingColorPicker, setSettingColor, ranksSorted,
    setSettingName, setSettingPriority, setSettingsBuffer
  } = store

  const rankList = ranksSorted.map((rank, i) => {
    const active = rank.rankNum === rankNum
    const classes = classNames('rank__item', active && 'rank__item-active')
    const handler = () => setSettingsBuffer(rank.rankNum)

    return <div className={classes} key={i} onClick={handler}>
      {rank.rankName}
    </div>
  })

  const settingsListView = settingsList.map(({ settingName, value }, i) =>
    <div className='setting__item' key={i}>
      <div className='setting__name'>{settingName}</div>
      <Switch
        onChange={() => setRankSetting(settingName)}
        checked={value} className='setting-switch' />
    </div>
  )

  return (
    <div className='rank-settings'>
      <div className='rank'>
        <div className='rank__title'>
          <div className='rank__title-text'>Ранг</div>
          <div className='rank__title-btn' onClick={() => setSettingsBuffer(0)}>
            <Icon icon='add-rank' />
          </div>
        </div>
        <div className='ranks__list scroll'>{rankList}</div>
      </div>
      <div className='current-rank'>

        <div className='input-group'>
          <div className='input-label'>Название ранга</div>
          <input type='text' className='input'
            value={name} onChange={e => setSettingName(e.target.value)} />
          <div className='input-error'>{}</div>
        </div>

        <div className='input-group'>
          <div className='input-label'>Приоритет</div>
          <input type='number' className='input input-num' value={priority}
            onChange={e => setSettingPriority(e.target.value)} />
          <div className='input-error'>{}</div>
        </div>

        <div className='color-panel'>
          <div className='color' onClick={() => setSettingColorPicker(true)}>
            <div className='color-text'>RGB</div>
            <div className='color-block' style={{ background: color }} />
            {colorPicker ? <div className='color-picker'
              id='fraction-color-picker'>
              <HexColorPicker color={color}
                onChange={color => setSettingColor(color)} />
            </div> : null}
          </div>
          <div className='color-container'>
            {colors.map((color, i) =>
              <div className='color-block' style={{ background: color }}
                onClick={() => setSettingColor(color)} key={i} />)
            }
          </div>
        </div>

        <div className='settings-list scroll'>{settingsListView}</div>
        <div className='button__container'>
          <div className='button'>
            <div className='text'>Удалить ранг</div>
          </div>
          <div className='button'>
            <div className='text'>Сохранить настройки</div>
          </div>
        </div>
      </div>
    </div>
  )
})