import React        from 'react'
import { observer } from 'mobx-react-lite'
import mouseHint    from './mouse-hint.svg'
import './shop-hints.scss'

export const ShopHints = observer(() => {
  return (
    <div className='shop-hints'>
      <div className='hint__container'>
        <div className='esc'>ESC</div>
        <div className='hint__text'>Нажмите для выхода из магазина</div>
      </div>
      <div className='hint__container'>
        <img src={mouseHint} alt='' />
        <div className='hint__text'>
          Для вращения зажмите ЛКМ и крутите мышкой
        </div>
      </div>
    </div>
  )
})