import React, { useEffect }                 from 'react'
import { observer }                         from 'mobx-react-lite'
import { store }                            from './credit-tablet-store'
import { ListContainer }                    from './components/list-container'
import { Rating }                           from './components/rating'
import { Title }                            from './components/title'
import { Actions }                          from './components/actions'
import logo                                 from './img/logo.svg'

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

  const { active } = store.state

  return active ? (
    <div className='credit-tablet'>
      <img src={logo} alt='' className='logo' />
      <Title />
      <ListContainer />
      <Rating />
      <Actions />
    </div>
  ) : null
})