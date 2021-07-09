import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './credit-tablet-store'
import { ListContainer }    from './components/list-container'
import { Rating }           from './components/rating'
import { Title }            from './components/title'
import { Actions }          from './components/actions'
import logo                 from './img/logo.svg'
import cn                   from 'classnames'
import './credit-tablet.scss'
import { Modal }            from './components/modal'

export const CreditTablet = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { open, close } = store

    em.addHandler('credit-tablet.open', open)
    em.addHandler('credit-tablet.close', close)

    return () => {
      em.removeHandler('credit-tablet.open', open)
      em.removeHandler('credit-tablet.close', close)
    }
  }, [])

  const { active, modalActive } = store.state
  const classes = cn('credit-tablet', modalActive && 'credit-tablet--blur')

  return active ? (
    <>
      <Modal />
      <div className={classes}>
        <img src={logo} alt='' className='logo' />
        <Title />
        <ListContainer />
        <div className='footer'>
          <Rating />
          <Actions />
        </div>
      </div>
    </>
  ) : null
})