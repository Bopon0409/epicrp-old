import { observer } from 'mobx-react-lite'
import React from 'react'
import SideBarOrder from './side-bar-order'
import store from '../../../store/bank/bank-store'
import { AreaChart, Area, YAxis, XAxis, Tooltip } from 'recharts'

export default observer(() => {
  const charData = store.chartData
  console.log(charData)

  return (
    <div className='order'>
      <div className='chart-wrapper'>
        <AreaChart
          width={900}
          height={300}
          data={charData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <YAxis width={100} />
          <XAxis dataKey='id' />
          <Tooltip />
          <Area dataKey='Баланс' stroke='#4E67DF' fill='#4E67DF' />
        </AreaChart>
      </div>
      <SideBarOrder data={store.state.accountsData} />{' '}
    </div>
  )
})
