import React        from 'react'
import { observer } from 'mobx-react-lite'

export const PropBar = observer((props: { value: number }) => {
  const { value } = props
  const bars = [20, 40, 60, 80, 100].map((item): number => {
    return value > item ? 100 : (item - value) * 5
  })

  return (
    <div className='prop-bar'>
      {bars.map((width) => (
        <div className='bar'>
          <div className='bar__bg' />
          <div className='bar__fill' style={{ width: `${width}%` }} />
        </div>
      ))}
    </div>
  )
})