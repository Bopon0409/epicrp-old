import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../house-store'
import CarListItem  from './car-list-item'
import Droppable    from './droppable'
import sliderBtn1   from '../img/slider_btn1.svg'
import sliderBtn2   from '../img/slider_btn2.svg'
import hintIcon     from '../img/hint-icon.svg'

export default observer(() => {
  const { sliderDec, sliderInc, carList } = store

  const carListView = carList.map(car =>
    <CarListItem car={car} key={`car-list${car.placeId}`} />
  )

  return (
    <div className='available-cars'>
      <div className='header'>
        <img src={hintIcon} alt='' className='header__icon' />
        <div className='header__text'>
          Перенесите своё авто в свободный слот, для того что бы разместить
          его в гараже
        </div>
      </div>
      <Droppable id={100}>
        <div className='car-list'>
          <img src={sliderBtn1} className='slider-btn'
            onClick={sliderDec} alt='' />
          {carListView}
          <img src={sliderBtn2} className='slider-btn'
            onClick={sliderInc} alt='' />
        </div>
      </Droppable>
    </div>
  )
})
