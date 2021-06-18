import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../electrician-store'
import { Item }     from './item'
import classNames   from 'classnames'
import { Header }   from './header'
import { Hint }     from './hint'

export const Board = observer(() => {
  const { state: { board, status }, boardSize } = store
  if (!board.length) return null
  const classes = classNames('board', `board--size-${boardSize}`)
  const bgClasses = classNames(
    status === 'fail' && 'bg--fail', status === 'win' && 'bg--win'
  )

  return (
    <div className={classes}>
      {board.map((item, i) => <Item key={i} item={item} />)}
      <div className={bgClasses} />
      <Header />
      <Hint type={'small'} />
    </div>
  )
})