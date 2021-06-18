import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../electrician-store'

export const Header = observer(() => {
  const { state: { status }, timerString } = store

  const isProcess = status === 'process'
  const isFail = status === 'fail'
  const isWin = status === 'win'

  return (
    <div className='header'>
      {isProcess && <div className='content process'>{timerString}</div>}
      {isFail && <div className='content fail'>Неудача</div>}
      {isWin && <div className='content win'>Успешно</div>}
    </div>
  )
})