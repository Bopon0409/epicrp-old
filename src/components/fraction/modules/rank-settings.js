import React from 'react'
import { observer }        from 'mobx-react-lite'
import Icon                from './icon'
import store               from '../fraction-store'
import Switch              from 'react-switch'
import classNames          from 'classnames'
import { HexColorPicker }  from 'react-colorful'

const colors = [
  '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E',
  '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E',
  '#FF0E0E', '#FF0E0E', '#FF0E0E', '#FF0E0E'
]

export default observer(() => {
  const {
    setCurrentSettingRank, ranksSorted, currentRankSettingsList, currentRank,
    setColorPicker, setRankColor
  } = store

  const { color, colorPicker } = store.state.rankSettings

  const rankList = ranksSorted.map((rank, i) => {
    const active = rank.rankNum === currentRank
    const classes = classNames('rank__item', active && 'rank__item-active')
    const handler = () => setCurrentSettingRank(rank.rankNum)

    return <div className={classes} key={i} onClick={handler}>
      {rank.rankName}
    </div>
  })

  const settingsList = currentRankSettingsList.map((setting, i) => {
    const { settingName, value } = setting
    return <div className='setting__item' key={i}>
      <div className='setting__name'>{settingName}</div>
      <Switch
        onChange={() => store.setRankSetting(settingName)}
        checked={value}
        className='setting-switch' />
    </div>
  })

  return (
    <div className='rank-settings'>
      <div className='rank'>
        <div className='rank__title'>
          <div className='rank__title-text'>Ранг</div>
          <div className='rank__title-btn'>
            <Icon icon='add-rank' />
          </div>
        </div>
        <div className='ranks__list scroll'>{rankList}</div>
      </div>
      <div className='current-rank'>
        <div className='input-group'>
          <div className='input-label'>
            Название ранга
          </div>
          <input type='text' id='input-name' className='input' />
          <div className='input-error'>{}</div>
        </div>
        <div className='input-group'>
          <div className='input-label'>Приоритет</div>
          <input type='text' id='input-priority' className='input' />
          <div className='input-error'>{}</div>
        </div>
        <div className='color-panel'>
          <div className='color' onClick={() => setColorPicker(true)}>
            <div className='color-text'>RGB</div>
            <div className='color-block' style={{ background: color }} />
            <div className='color-picker' id='fraction-color-picker'>
              {colorPicker ?
                <HexColorPicker color={color}
                  onChange={color => setRankColor(color)} />
                : null}
            </div>
          </div>
          <div className='color-container'>
            {colors.map(color =>
              <div className='color-block'
                style={{ background: color }}
                onClick={() => setRankColor(color)} />)}
          </div>
        </div>
        <div className='settings-list scroll'>{settingsList}</div>
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