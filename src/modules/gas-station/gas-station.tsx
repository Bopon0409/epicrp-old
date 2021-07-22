import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './gas-station-store'
import { Payment }          from '../payment/payment'
import { Canister }         from './components/canister'
import { Main }             from './components/main'
import { Info }             from './components/info'
import './gas-station.scss'

export const GasStation = observer(() => {
  const {
    state: { active, money, businessNum }, currentPrice, buy, paymentBlocked
  } = store

  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData } = store

    em.addHandler('gas-station.active', setActive)
    em.addHandler('gas-station.data', setData)
    return () => {
      em.removeHandler('gas-station.active', setActive)
      em.removeHandler('gas-station.data', setData)
    }
  }, [])

  return active ? (
    <div className='gas-station'>
      <div className='bg' />
      <div className='title'>
        <div className='num'>#{businessNum}</div>
        <div className='text'>Заправочная станция</div>
      </div>
      <div className='container'>
        <Canister />
        <Main />
        <Info />
      </div>
      <Payment money={money} price={currentPrice} payAction={buy}
        blocked={paymentBlocked} />
    </div>
  ) : null
})