import { observer } from 'mobx-react-lite'
import { store }    from '../business-stats-store'

import { PieChart, Pie, Cell } from 'recharts'
import { priceFormat }         from '../../../services/services'

import { StaffList }  from './staffList'
import { StaffPrize } from './staffPrize'

export const Staff = observer(() => {
  const { staff } = store.state
  const { state } = store
  const data = [
    {
      name: 'Эвакуации',
      value: store.state.staff.earnedTypes[state.staffStatsDate][0]
    },
    {
      name: 'Ремонты',
      value: store.state.staff.earnedTypes[state.staffStatsDate][1]
    }
  ]
  const sum = () => {
    return (
      staff.earnedTypes[state.staffStatsDate][0] +
      staff.earnedTypes[state.staffStatsDate][1]
    )
  }
  const COLORS = ['#5165D7', '#F2C94C']
  return (
    <div className='staff'>
      <div className='staff-left_block main-blocks'>
        <div className='stats'>
          <div className='stats-name'>ОБЩАЯ СТАТИСТИКА</div>
          <div className='stats-time'>
            <div>
              <div onClick={() => store.setStaffStatsDate(0)}>Сегодня</div>
              <div
                className={state.staffStatsDate === 0 ? 'active-line' : ''} />
            </div>
            <div>
              <div onClick={() => store.setStaffStatsDate(1)}>Неделя</div>
              <div
                className={state.staffStatsDate === 1 ? 'active-line' : ''} />
            </div>
            <div className='line' />
          </div>
        </div>
        <div className='employees'>
          <span>ВСЕГО СОТРУДНИКОВ</span>
          <span>{staff.staffList[state.staffStatsDate].length}</span>
        </div>
        <div className='employeesProfit'>СОТРУДНИКАМИ ЗАРАБОТАНО</div>
        <div className='profit'>
          <PieChart width={190} height={190}>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill='#8884d8'
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className='diagram-data'>
            <div>${priceFormat(sum())}</div>
            <div className='types'>
              <div className='type-1'>Эвакуации</div>
              <div className='type-2'>Ремонты</div>
            </div>
          </div>
        </div>
        <div className='evacuations text'>
          <span>Эвакуации</span>
          <span>
            ${priceFormat(staff.earnedTypes[state.staffStatsDate][0])}
          </span>
        </div>
        <div className='repair text'>
          <span>Ремонты</span>
          <span>
            ${priceFormat(staff.earnedTypes[state.staffStatsDate][1])}
          </span>
        </div>
      </div>

      <div className='staff-right_block main-blocks'>
        {
          state.staffModalWindow ? <StaffPrize /> : <StaffList />
        }
      </div>
    </div>
  )
})
