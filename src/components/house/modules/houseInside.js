import React        from 'react'
import { observer } from 'mobx-react-lite'
import classNames   from 'classnames'
import store        from '../house-store'
import insideImage1 from '../img/inside__image1.png'
import insideImage2 from '../img/inside__image2.png'
import insideImage3 from '../img/inside__image3.png'
import insideImage4 from '../img/inside__image4.png'
import insideImage5 from '../img/inside__image5.png'

export default observer(() => {
  const { houseLock, cupboardLock } = store
  const {
    open, cupboardOpen, capabilities: {
      garageManager, roommatesManager, lockCupboard, lockHouse, pay
    }
  } = store.state

  const garageManagerClasses =
    classNames('button', !garageManager && 'button-disabled')
  const roommatesManagerClasses =
    classNames('button', !roommatesManager && 'button-disabled')
  const openHouseClasses =
    classNames('button', !lockHouse && 'button-disabled')
  const openCupboardClasses =
    classNames('button', !lockCupboard && 'button-disabled')
  const payClasses =
    classNames('button', !pay && 'button-disabled')

  return <div className="inside">
    <div className={openHouseClasses} onClick={houseLock}>
      <img src={insideImage1} alt="" className="button__img" />
      <div className="button__title">
        {open ? 'Закрыть дом' : 'Открыть дом'}
        {!lockHouse && ' (Недоступно)'}
      </div>
      <div className="button__bg" />
    </div>

    <div className={garageManagerClasses} onClick={() => store.setMode(3)}>
      <img src={insideImage2} alt="" className="button__img" />
      <div className="button__title">
        Менеджер Гаража {!garageManager && '(Недоступно)'}
      </div>
      <div className="button__bg" />
    </div>

    <div className={payClasses}>
      <img src={insideImage3} alt="" className="button__img" />
      <div className="button__title">
        Оплата дома {!pay && '(Недоступно)'}
      </div>
      <div className="button__bg" />
    </div>

    <div className={roommatesManagerClasses} onClick={() => store.setMode(4)}>
      <img src={insideImage4} alt="" className="button__img" />
      <div className="button__title">
        Менеджер сожителей {!roommatesManager && '(Недоступно)'}
      </div>
      <div className="button__bg" />
    </div>

    <div className={openCupboardClasses} onClick={cupboardLock}>
      <img src={insideImage5} alt="" className="button__img" />
      <div className="button__title">
        {cupboardOpen ? 'Закрыть шкаф' : 'Открыть шкаф'}
        {!lockCupboard && ' (Недоступно)'}
      </div>
      <div className="button__bg" />
    </div>
  </div>
})