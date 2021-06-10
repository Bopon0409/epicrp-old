import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../car-shop-store'
import classNames   from 'classnames'

export interface IColor {
  name: string,
  value: string
}

export interface ColorBarProps {
  main: IColor[],
  additional: IColor[]
}

export const ColorBar = observer((props: ColorBarProps) => {
  const { colorMain, colorAdditional } = store.state
  const { setMainColor, setAdditionalColor } = store
  const { main, additional } = props

  return (
    <div className='color-bar'>
      <div className='title'>Основной цвет</div>
      <div className='color-list'>{main.map((color) => {
        const active = color.name === colorMain
        const className = classNames('color', active && 'color--active')
        const handler = () => setMainColor(color.name)

        return <div className={className} onClick={handler} key={color.name}
          style={{ background: color.value }} />
      })}</div>

      <div className='title'>Дополнительный цвет</div>
      <div className='color-list'>{additional.map((color) => {
        const active = color.name === colorAdditional
        const className = classNames('color', active && 'color--active')
        const handler = () => setAdditionalColor(color.name)

        return <div className={className} onClick={handler} key={color.name}
          style={{ background: color.value }} />
      })}</div>
    </div>
  )
})