import React        from 'react'
import { observer } from 'mobx-react-lite'
import Card         from './card'
import EmptyCard    from './empty-card'
import store        from '../bank-store'

export const MyAccount = observer(() => {
  const { accountsData } = store.state
  return (
    <div className='my-account'>
      <div
        className='control__card-container'
        style={{
          justifyContent: accountsData.length > 0 ? 'space-between' : 'center'
        }}
      >
        {accountsData.length > 0 && <Card account={accountsData[0]} />}
        {accountsData.length > 1 && <Card account={accountsData[1]} />}
        {accountsData.length < 2 && <EmptyCard />}
      </div>
    </div>
  )
})