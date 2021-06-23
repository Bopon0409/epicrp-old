import React         from 'react'
import { observer }  from 'mobx-react-lite'
import store         from '../hud-store'
import { formatNum } from '../../../services/services'
import geoIcon       from '../images/geo-icon.svg'
import moneyIcon     from '../images/money-icon.svg'
import MicroSvg      from './micro-svg'
import cn            from 'classnames'

export default observer(() => {
  const {
    state: { money, moneyAdd, geo, microphone: { active, btn }, map },
    marginLeft
  } = store
  const blockStyle = { left: `${marginLeft}px`, bottom: `${map.bottom}px` }
  const moneyAddClasses = cn('money-add',
    moneyAdd.status === 'top' && 'money-add--top',
    moneyAdd.status === 'disable' && 'money-add--disable',
    moneyAdd.status === 'bottom' && 'money-add--bottom',
    moneyAdd.status === 'center' && 'money-add--center',
    moneyAdd.sum > 0 ? 'money-add--green' : 'money-add--red'
  )

  return (
    <div className='bottom-left-panel' style={blockStyle}>
      <div className='micro-block block'>
        <MicroSvg active={active} />
        <div className={active ? 'micro-btn-hint active' : 'micro-btn-hint'}>
          {btn}
        </div>
      </div>
      <div className='money-block block'>
        <img src={moneyIcon} alt='' className='money-icon' />
        <div className='money'>{formatNum(money, ' ')} $</div>
        <div className={moneyAddClasses}>
          {moneyAdd.sum > 0 && '+'} {moneyAdd.sum}
        </div>
      </div>
      <div className='geo-block block'>
        <img src={geoIcon} alt='' className='geo-icon' />
        <div className='geo-place'>
          <div className='quarter'>{geo.quarter}</div>
          <div className='street'>{geo.street}</div>
        </div>
      </div>
    </div>
  )
})
