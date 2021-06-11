import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../work-store'
import carrierImg   from '../img/title_carrier.png'
import busImg       from '../img/title_bus.png'
import taxiImg      from '../img/title_taxi.png'
import stepsImg     from '../img/steps.svg'

export const Description = observer(() => {
  const { state: { type }, content } = store
  const { name, description, progressName, steps, transport } = content
  return (
    <div className='description-block'>
      <div className='title'>
        <img src={type === 1 ? taxiImg : type === 2 ? busImg : carrierImg}
          alt='' className='title__img' />
        <div className='title__text'>
          <div className='first'>Профессия</div>
          <div className='second'>{name}</div>
        </div>
      </div>

      <div className='steps'>
        <div className='steps__title'>Как начать работать?</div>
        <div className='steps__container steps__container--center'>
          <div className='step__item'>{steps[1]}</div>
        </div>
        <img src={stepsImg} alt='' className='steps__img' />
        <div className='steps__container steps__container--space-between'>
          <div className='step__item'>{steps[0]}</div>
          <div className='step__item'>{steps[2]}</div>
        </div>
      </div>
    </div>
  )
})