import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../gas-station-store'
import canisterImg  from '../img/canister.png'

export const Canister = observer(() => {
  const {
    state: { canisterAvailability, canisterInCart }, canisterToggle
  } = store
  const btnText = canisterInCart ? 'Не покупать' : 'Добавить к покупкам'

  return canisterAvailability ? (
    <div className='canister'>
      <div className='canister__title'>Дополнительное предложение</div>
      <div className='canister__title'>Многоразовая канистра</div>
      <img src={canisterImg} alt='' className='canister__img' />
      <div className='canister__text'>
        Универсальная 20-литровая канистра "EpicCan" предназначена для
        хранения топлива любого вида. Канистра изготовлена из оцинкованной
        стали, которая обладает высокими антикоррозийными свойствами и
        устойчива к агрессивному воздействию заливаемой жидкости. Для удобства
        переноски изделие оснащено крепкой ручкой. В верхнюю часть канистры
        встроен регулировочный клапан, который выравнивает давление воздуха
        внутри емкости с атмосферным, ускоряя процесс заливки и опорожнения.
        С канистрой также поставляется гофрированная трубка-лейка, находящаяся
        под крышкой. С ее помощью удобно заливать топливо в горловину бака
        любой конфигурации.
      </div>
      <div className='canister__button' onClick={canisterToggle}>
        <div className='text'>{btnText}</div>
      </div>
    </div>
  ) : null
})