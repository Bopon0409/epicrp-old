import React from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '../business-stats-store'
import { priceFormat } from '../../../services/services'
import { IDaily } from '../model'
import { LineChart, Line, XAxis, YAxis } from 'recharts'
import cn from 'classnames'

import { Graphics } from './Graphics';

const GraphicsTypes = [
  'Выручка за товар',
  'Продано единиц товара',
  'Потрачено за покупку'
];



export const Statistics = observer(() => {
  const width = window.innerWidth / 2 < 960 ? window.innerWidth / 2 : 960
  const height = window.innerHeight / 3 < 360 ? window.innerHeight / 3 : 360
  return (
    <div className='statistics'>
      <div className='statistics-left_block'>
        <div className='business_balance statistics-block'>
          <div className='block_name'>БАЛАНС БИЗНЕСА</div>
          <div className='balance'>
            $ {priceFormat(store.state.stats?.businessBalance)}
          </div>
          <div className='buttons'>
            <div className='withdraw'>ВЫВЕСТИ</div>
            <div className='deposit'>ПОПОЛНИТЬ</div>
          </div>
        </div>
        <div className='daily_сonsumption statistics-block'>
          <div className='block_name'>
            <span>СУТОЧНЫЕ РАСХОДЫ</span>
            <span className='red'>
              {CountSum(store.state.stats?.dailyConsumption)}
            </span>
          </div>
          <div className='consumption_list'>
            {store.state.stats?.dailyConsumption.map((consumption, i) => (
              <div className='consumption'>
                <span>{consumption.reason}</span>
                <span className='red'>-$ {priceFormat(consumption.price)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='daily_income statistics-block'>
          <div className='block_name'>
            <span>СУТОЧНЫЙ ДОХОД</span>
            <span className='green'>
              {CountSum(store.state.stats?.dailyIncome)}
            </span>
          </div>
          <div className='dailyIncome_list'>
            {store.state.stats?.dailyIncome.map((income, i) => (
              <div className='dailyIncome'>
                <span>{income.reason}</span>
                <span className='green'>+$ {priceFormat(income.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='statistics-right_block'>
        <div className='graphics'>
          <div className='graphics__upper-block'>
            <div className='name'>СТАТИСТИКА ЗА НЕДЕЛЮ</div>
            <div className='graphics_block'>
              {GraphicsTypes.map((type, i) => (
                <div
                  className='block'
                  onClick={() => store.setActiveTypeGraphics(i)}
                >
                  <div className='block__content'>{type}</div>
                  <div
                    className={
                      store.state?.activeTypeGraphics === i ? 
                      'block__line--active' : 'block__line'}
                  ></div>
                </div>
              ))}
              <div className='graphics_block-line' />
            </div>
          </div>
                <Graphics />
        </div>
        <div className='other'>
          <div className='often_buy statistics-block'>
            <div className='block_name'>
              <span>ЧАСТО ПОКУПАЮТ</span>
              <span></span>
            </div>
            <div className='oftenBuy_List'>
              {store.state.stats?.oftenBuy.map((oftenBuy, i) => (
                <div className='oftenBuy'>
                  <span>{oftenBuy.name}</span>
                  <span className='blue'>$ {priceFormat(oftenBuy.price)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='buttons'>
            <div className='sell_business_in_nation btn'>
              ПРОДАТЬ БИЗНЕС ГОСУДАРСТВУ
            </div>
            <div className='open_business btn'>ОТКРЫТЬ БИЗНЕС</div>
          </div>
        </div>
      </div>
    </div>
  )
})

const CountSum = (arr: IDaily[] | undefined) => {
  let sum = 0
  arr?.map(v => {
    console.log(v)
    sum += v.price
  })
  return `$ ${priceFormat(sum)}`
}
