import React        from 'react'
import { observer } from 'mobx-react-lite'

export interface HintProps {
  type: 'small' | 'big'
}

export const Hint = observer((props: HintProps) => {
  return (
    <div>

    </div>
  )
})