import React                                from 'react'
import { observer }                         from 'mobx-react-lite'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { store }                            from '../credit-tablet-store'

export const Rating = observer(() => {
  const { rating } = store.state
  return (
    <div className='rating'>
      <div className='rating__title'>Рейтинг надёжности заёмщика</div>
      <div className='rating__name'>
        {rating > 60 ? 'Надежный' : 'Не надежный'}
      </div>
      <CircularProgressbar
        value={rating}
        text={`${rating}%`}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: '#1884D2',
          trailColor: 'transparent'
        })}
      />
    </div>
  )
})