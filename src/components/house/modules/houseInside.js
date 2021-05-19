import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../house-store'
import insideImage1 from '../img/inside__image1.png'
import insideImage2 from '../img/inside__image2.png'
import insideImage3 from '../img/inside__image3.png'
import insideImage4 from '../img/inside__image4.png'
import insideImage5 from '../img/inside__image5.png'

export default observer(() => {
  return <div className='inside'>
    <div className='button'>
      <img src={insideImage1} alt='' className='button__img' />
      <div className='button__title'>
        {store.state.open ? 'Закрыть дом' : 'Открыть дом'}
      </div>
      <div className='button__bg' />
    </div>
    <div className='button'>
      <img src={insideImage2} alt='' className='button__img' />
      <div className='button__title'>Менеджер Гаража</div>
      <div className='button__bg' />
    </div>
    <div className='button'>
      <img src={insideImage3} alt='' className='button__img' />
      <div className='button__title'>Оплата дома</div>
      <div className='button__bg' />
    </div>
    <div className='button' onClick={() => store.setMode(4)}>
      <img src={insideImage4} alt='' className='button__img' />
      <div className='button__title'>Менеджер сожителей</div>
      <div className='button__bg' />
    </div>
    <div className='button'>
      <img src={insideImage5} alt='' className='button__img' />
      <div className='button__title'>
        {store.state.cupboardOpen ? 'Закрыть шкаф' : 'Открыть шкаф'}
      </div>
      <div className='button__bg' />
    </div>
  </div>
})