import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../car-shop-store'
import classNames   from 'classnames'

interface ColorBarProps {
  main: string[],
  additional: string[]
}

export const ColorBar = observer((props: ColorBarProps) => {
  const { colorMain, colorAdditional } = store.state
  const { setMainColor, setAdditionalColor } = store
  const { main, additional } = props

  return (
    <div className='color-bar'>
      <div className='title'>Основной цвет</div>
      {main.map((color) => {
        const active = color === colorMain
        const className = classNames('color', active && 'color--active')
        const handler = () => setMainColor(color)

        return <div className={className} onClick={handler} key={color} />
      })}

      <div className='title'>Дополнительный цвет</div>
      {additional.map((color) => {
        const active = color === colorAdditional
        const className = classNames('color', active && 'color--active')
        const handler = () => setAdditionalColor(color)

        return <div className={className} onClick={handler} key={color} />
      })}
    </div>
  )
})