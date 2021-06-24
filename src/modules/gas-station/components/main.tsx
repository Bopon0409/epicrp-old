import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../gas-station-store'
import InputRange   from 'react-input-range'
import { FuelList } from './fuel-list'

export const Main = observer(() => {
  const { state: { slider, gasTank }, setSlider, sliderMaxValue } = store

  const handler1 = () => setSlider(gasTank / 4)
  const handler2 = () => setSlider(gasTank / 2)
  const handler3 = () => setSlider(gasTank)

  return (
    <div className='main'>
      <div className='main__title'>Выберете тип топлива</div>
      <FuelList />
      {sliderMaxValue !== 0 && (
        <>
          <div className='main__title'>Быстрая заправка</div>
          <div className='refueling'>
            <div className='refueling__item' onClick={handler1}>
              <div className='text'>1/4</div>
            </div>
            <div className='refueling__item' onClick={handler2}>
              <div className='text'>1/2</div>
            </div>
            <div className='refueling__item' onClick={handler3}>
              <div className='text'>Full</div>
            </div>
          </div>

          <div className='main__title'>Заправка в литрах</div>
          <div className='range-container'>
            <InputRange
              onChange={(range) => setSlider(Number(range))}
              value={slider}
              minValue={0}
              maxValue={sliderMaxValue}
            />
          </div>
        </>
      )}
    </div>
  )
})