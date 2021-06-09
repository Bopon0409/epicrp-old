import React        from 'react'
import { observer } from 'mobx-react-lite'
import './prop-bar.scss'

export const PropBar = observer((props: { value: number }) => {
  const { value } = props
  const bars = [20, 40, 60, 80, 100].map((item): number => {
    const difference = item - value
    if (difference > 0 && difference < 20) return ((20 - difference) * 5)
    else if (value >= item) return 100
    else return 0
  })

  return (
    <div className='prop-bar'>
      {bars.map((width) => (
        <div className='bar'>
          <div className='bar__fill' style={{ width: `${width}%` }} />
        </div>
      ))}
    </div>
  )
})