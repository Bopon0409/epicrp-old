import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../player-menu-store'
import Switch       from 'react-switch'
import InputRange   from 'react-input-range'

export const Settings = observer(() => {
  const {
    settingsState: {
      control, settings, keyWaiting, sizes: { fontSize, chatSize, rowSize }
    },
    getKeyName, setKeyWaiting, setSetting, setRowSize, setFontSize, setChatSize
  } = store

  const wait = '< Нажмите желаемую кнопку >'

  const controlList = control.map(({ name, keyCode }, i) => (
    <div className='control__item' onClick={() => setKeyWaiting(name)}
      key={i}>
      <div>{name}</div>
      <div>{keyWaiting === name ? wait : getKeyName(keyCode)}</div>
    </div>
  ))

  const togglesList = settings.map((item, i) => (
    <div className='toggle__item' key={i}>
      <div>{item.name}</div>
      <Switch checked={item.status}
        onChange={(val) => setSetting(item, val)} />
    </div>
  ))

  return (
    <div className='settings'>
      <div className='col control-col'>
        <div className='col__title'>Назначение клавиш</div>
        <div className='control'>{controlList}</div>
        <div className='col__hint'>
          Для переназначения управления, нажмите на нужную Вам кнопку. Далее
          переназначьте кнопку с помощью ввода новой кнопки.
        </div>
      </div>
      <div className='col'>
        <div className='col__title'>Настройки</div>
        <div className='container'>
          <div className='toggle'>{togglesList}</div>
          <div className='range-list'>
            <div className='range-label'>Высота чата</div>
            <InputRange onChange={range => setChatSize(range)} value={chatSize}
              minValue={10} maxValue={200} />
            <div className='range-label'>Высота строк в чате</div>
            <InputRange onChange={range => setRowSize(range)} value={rowSize}
              minValue={10} maxValue={200} />
            <div className='range-label'>Размер шрифта чата</div>
            <InputRange onChange={range => setFontSize(range)} value={fontSize}
              minValue={10} maxValue={200} />
          </div>
        </div>
      </div>
    </div>
  )
})