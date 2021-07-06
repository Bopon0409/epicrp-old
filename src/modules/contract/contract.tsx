import React, { useEffect } from 'react'
import { observer }         from 'mobx-react-lite'
import { store }            from './contract-store'
import './contract.scss'
import { InsuranceClient }  from './components/insurance-client'
import { InsuranceBank }    from './components/insurance-bank'
import { CreditClient }     from './components/credit-client'
import { CreditBank }       from './components/credit-bank'

export const Contract = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const {
      openBankInsurance, openClientInsurance,
      openClientCredit, openBankCredit, close
    } = store

    em.addHandler('contract.open.client.insurance', openClientInsurance)
    em.addHandler('contract.open.bank.insurance', openBankInsurance)
    em.addHandler('contract.open.client.credit', openClientCredit)
    em.addHandler('contract.open.bank.credit', openBankCredit)
    em.addHandler('contract.close', close)

    return () => {
      em.removeHandler('contract.open.client.insurance', openClientInsurance)
      em.removeHandler('contract.open.bank.insurance', openBankInsurance)
      em.removeHandler('contract.open.client.credit', openClientCredit)
      em.removeHandler('contract.open.bank.credit', openBankCredit)
      em.removeHandler('contract.close', close)
    }
  }, [])

  const { type } = store.state

  return type !== null ? (
    <div className='insurance-contract'>
      {type === 'client-insurance' && <InsuranceClient />}
      {type === 'bank-insurance' && <InsuranceBank />}
      {type === 'client-credit' && <CreditClient />}
      {type === 'bank-credit' && <CreditBank />}
    </div>
  ) : null
})