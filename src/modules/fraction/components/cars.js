import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../fraction-store'
import carImg       from '../img/car_img.png'

export default observer(() => {
  const carsList = store.state.cars.map((car, i) => {
    const { name, groupId, fuel, geo, id } = car
    const groupName = store.getGroupName(groupId)
    const handler = e => store.memberClickHandler(e, id)

    return <div className='car__item' key={i} onClick={handler}>
      <img src={carImg} alt='' className='car__img' />
      <div className='car__info'>
        <div className='car__prop-name'>Название</div>
        <div className='car__prop-value'>{name}</div>
        <div className='car__prop-name'>Местоположение</div>
        <div className='car__prop-value'>{geo}</div>
        <div className='car__prop-name'>Топливо</div>
        <div className='car__prop-value'>{fuel}</div>
        <div className='car__prop-name'>Отдел</div>
        <div className='car__prop-value'>{groupName}</div>
      </div>
    </div>
  })

  return (
    <div className='cars scroll'>
      <div className='cars__list'>{carsList}</div>
    </div>
  )
})