import React        from 'react'
import mouseHint    from '../img/mouse-hint.svg'

export const Hints = () => (
  <div className='hints'>
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
