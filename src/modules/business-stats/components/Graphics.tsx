import React from 'react';
import { store } from '../business-stats-store';
import { observer } from 'mobx-react-lite';
import { LineChart, Line, XAxis, YAxis } from 'recharts';



export const Graphics = observer(() => {
    // const Data = store.state.stats?.weeklyStatistics;
    switch (store.state?.activeTypeGraphics) {
        case 0:
            return (<LineChart
                width={863}
                height={341}
                data={store.state.stats?.weeklyStatistics?.income}
              >
                <Line dataKey='value' stroke='#8884d8' dot={false} />
                <XAxis dataKey='dayName' width={2} />
                <YAxis />
              </LineChart>)
        case 1:
            return (<LineChart
                width={863}
                height={341}
                data={store.state.stats?.weeklyStatistics?.quantitySoldItems}
              >
                <Line dataKey='value' stroke='#8884d8' dot={false} />
                <XAxis dataKey='dayName' />
                <YAxis />
              </LineChart>)
        case 2: 
        return (<LineChart
            width={863}
            height={341}
            data={store.state.stats?.weeklyStatistics?.consumption}
          >
            <Line dataKey='value' stroke='#8884d8' dot={false} />
            <XAxis dataKey='dayName' width={2} />
            <YAxis />
          </LineChart>)
        default:
            return null;
    }
})