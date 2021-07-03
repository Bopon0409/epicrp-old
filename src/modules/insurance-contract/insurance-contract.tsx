import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './insurance-contract-store'
import './insurance-contract.scss'
import { Client }           from './components/client'
import { Bank }             from './components/bank'

export const InsuranceContract = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { openBank, openClient, close } = store

    em.addHandler('insurance-contract.open.client', openClient)
    em.addHandler('insurance-contract.open.bank', openBank)
    em.addHandler('insurance-contract.close', close)

    return () => {
      em.removeHandler('insurance-contract.open.client', openClient)
      em.removeHandler('insurance-contract.open.bank', openBank)
      em.removeHandler('insurance-contract.close', close)
    }
  }, [])

  const { state: { type }, clear, submit } = store

  return type !== null ? (
    <div className='insurance-contract'>
      {type === 'client' ? <Client /> : <Bank />}
      <div className='buttons'>
        <div className='button' onClick={clear}>
          <div className='text'>Очистить поле</div>
        </div>
        <div className='button' onClick={submit}>
          <div className='text'>Продолжить</div>
        </div>
      </div>
    </div>
  ) : null
})