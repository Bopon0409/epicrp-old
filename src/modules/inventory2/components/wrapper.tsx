import React        from 'react'
import { observer } from 'mobx-react-lite'

export interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = observer((props: WrapperProps) => {
  return (
    <div className='wrapper'>{props.children}</div>
  )
})