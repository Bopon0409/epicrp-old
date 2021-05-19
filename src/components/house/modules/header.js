import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../house-store'
import hintIcon     from '../img/hint-icon.svg'

export default observer(() => {
  const { title, subTitle } = store.headerData
  return (
    <div className='header'>
      <div className='hint'>
        <div className='hint__title'>{title}</div>
        {!!subTitle && <div className='hint__subtitle'>
          <img src={hintIcon} alt='' className='hint__icon' />
          <div className='hint__subtitle-text'>{subTitle}</div>
        </div>}
      </div>
      <div className='exit'>
        <div className='exit__btn'>
          <div className='text'>Esc</div>
        </div>
        <div className='exit__text'>Закрыть</div>
      </div>
    </div>
  )
})