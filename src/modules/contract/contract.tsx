import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './contract-store'
import './contract.scss'
import { InsuranceClient }  from './components/insurance-client'
import { InsuranceBank }    from './components/insurance-bank'

export const Contract = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { openBank, openClient, close } = store

    em.addHandler('contract.open.client', openClient)
    em.addHandler('contract.open.bank', openBank)
    em.addHandler('contract.close', close)

    return () => {
      em.removeHandler('contract.open.client', openClient)
      em.removeHandler('contract.open.bank', openBank)
      em.removeHandler('contract.close', close)
    }
  }, [])

  const { type } = store.state

  return type !== null ? (
    <div className='insurance-contract'>
      {type === 'client-insurance' && <InsuranceClient />}
      {type === 'bank-insurance' && <InsuranceBank />}
    </div>
  ) : null
})