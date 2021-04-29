import React from 'react'
import { observer } from 'mobx-react-lite'
import store from '../bank-store'
import ToggleBar from './toggle-bar'
import Card from './card'
import EmptyCard from './empty-card'

export default observer(() => {
  const { accountsData } = store.state
  return (
    <div className='control'>
      {accountsData.length && (
        <div className='control-actions'>
          <ToggleBar type='control-actions' />
        </div>
      )}

      <div
        className='control__card-container'
        style={{
          justifyContent: accountsData.length > 0 ? 'space-between' : 'center'
        }}
      >
        {accountsData.length > 0 && <Card account={accountsData[0]} id={0} />}
        {accountsData.length > 1 && <Card account={accountsData[1]} id={1} />}
        {accountsData.length < 2 && <EmptyCard />}
      </div>
    </div>
  )
})
