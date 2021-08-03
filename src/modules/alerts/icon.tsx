import React        from 'react'
import { observer } from 'mobx-react-lite'
import { TAlert }   from './model'

import iconSuccess from './img/success.svg'
import iconError   from './img/error.svg'
import iconSystem  from './img/system.svg'
import iconDialog  from './img/dialog.svg'
import iconHelp    from './img/help.svg'
import iconReport  from './img/report.svg'
import iconMsg     from './img/msg.svg'

export const Icon = observer((props: { type: TAlert }) => {
  switch (props.type) {
    case 'success':
      return <img src={iconSuccess} alt='' />
    case 'error':
      return <img src={iconError} alt='' />
    case 'help':
      return <img src={iconHelp} alt='' />
    case 'report':
      return <img src={iconReport} alt='' />
    case 'system':
      return <img src={iconSystem} alt='' />
    case 'msg':
      return <img src={iconMsg} alt='' />
    case 'dialog':
      return <img src={iconDialog} alt='' />
    default:
      return null
  }
})