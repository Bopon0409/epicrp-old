import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'
import store               from '../bank-store'
import MainMenuItemSvg     from '../svg/control-action-icon'
import classNames          from 'classnames'

export default observer(({ type }) => {
  const TOGGLE_CLASS = 'toggle-bar__btn'
  const TOGGLE_CLASS_ACTIVE = 'toggle-bar__btn_active'

  const { title, icon, text1, text2 } = store.getToggleParams(type)

  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)

  const classes1 = classNames(TOGGLE_CLASS, hover1 && TOGGLE_CLASS_ACTIVE)
  const classes2 = classNames(TOGGLE_CLASS, hover2 && TOGGLE_CLASS_ACTIVE)

  return (
    <>
      {title && <div className='toggle-bar__title'>{title}</div>}
      <div className='toggle-bar__container'>
        <div className={classes1}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          {icon && <MainMenuItemSvg num={1} active={hover1} />}
          <div className='toggle-bar__text'>{text1}</div>
          <div className='toggle-bar__line' />
        </div>
        <div className={classes2}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          {icon && <MainMenuItemSvg num={2} active={hover2} />}
          <div className='toggle-bar__text'>{text2}</div>
          <div className='toggle-bar__line' />
        </div>
      </div>
    </>
  )
})
