import { observer } from 'mobx-react-lite'
import React from 'react'
import SideBarOrder from './side-bar-order'
import store from '../../../store/bank/bank-store'
import { AreaChart, Area, YAxis, XAxis, Tooltip } from 'recharts'

export default observer(() => {
  const width = window.innerWidth / 2 < 960 ? window.innerWidth / 2 : 960
  const height = window.innerHeight / 3 < 360 ? window.innerWidth / 3 : 360

  return (
    <div className='order'>
      <div className='chart-wrapper'>
        <AreaChart
          width={width}
          height={height}
          data={store.chartData}
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
