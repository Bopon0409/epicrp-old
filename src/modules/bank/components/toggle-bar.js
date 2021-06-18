import React, { useState } from 'react'
import { observer }        from 'mobx-react-lite'
import store               from '../bank-store'
import MainMenuItemSvg     from '../svg/control-action-icon'
import classNames          from 'classnames'

export default observer(({ type }) => {
  const TOGGLE_CLASS = 'toggle-bar__btn'
  const TOGGLE_CLASS_ACTIVE = 'toggle-bar__btn_active'

  const {
    title, icon, text1, text2, handler1, handler2
  } = store.getToggleParams(type)

  const active1 = type === 'payment-for-services' ? store.state.hasHouse : true
  const active2 = type === 'payment-for-services' ? store.state.hasPhone : true

  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)

  const classes1 = classNames(TOGGLE_CLASS,
    active1 && hover1 && TOGGLE_CLASS_ACTIVE
  )

  const classes2 = classNames(TOGGLE_CLASS,
    active2 && hover2 && TOGGLE_CLASS_ACTIVE
  )

  return (
    <>
      {title && <div className='toggle-bar__title'>{title}</div>}
      <div className='toggle-bar__container'>
        <div className={classes1}
          onClick={active1 ? handler1 : null}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          {icon && <MainMenuItemSvg num={1} active={hover1} />}
          <div className='toggle-bar__text'>{text1}</div>
          <div className='toggle-bar__line' />
        </div>
        <div className={classes2}
          onClick={active2 ? handler2 : null}
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
