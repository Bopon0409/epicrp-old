import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../fraction-store'
import DiscordList  from './discord-list'

export default observer(() =>
  <div className='info'>
    <div className='about'>
      <div className='about__description'>{store.state.description}</div>
      <div className='about__ads' onClick={() => store.setAdsActive(true)}>
        Смотреть объявления фракции
      </div>
    </div>
    <DiscordList />
  </div>
)
