import React         from 'react'
import { observer }  from 'mobx-react-lite'
import store         from '../choise-pers-store'
import { formatNum } from '../../../services/services'
import BuyView       from './buy-view'
import EmptyView     from './empty-view'
import DeleteSvg     from './delete-svg'
import regIcon       from '../images/reg-icon.svg'
import timeIcon      from '../images/time-icon.svg'

export default observer(({ index }) => {
  const pers = store.state.data[index]
  const active = store.state.currentPers === index
  const { setCurrentPers, deleteCharacter } = store

  if (pers.purchase) return <BuyView />
  if (pers.empty) return <EmptyView />

  return (
    <div
      className={active ? 'slot-pers active-pers' : 'slot-pers'}
      onClick={() => setCurrentPers(index)}
    >
      <div className='light-hover' />
      <div className='name-pers'>
        <span className='name'>{pers.name}</span>
        <span className='surname'>{pers.surname}</span>
      </div>
      <div className='details'>
        <div className='lvl'>
          <span className='bold'>{pers.lvl}</span>
          <span>Уровень</span>
        </div>
        <div className='details__fraction'>
          <span className='bold'>{pers.fraction}</span>
        </div>
        <div className='money'>
          <span className='bold'>{formatNum(pers.money, ' ')}</span>
          <span>$</span>
        </div>
        <div className='reg flex-block'>
          <img src={regIcon} alt='' className='icon' />
          <span>Регистрация: </span>
          <span className='bold'>{pers.regDate}</span>
        </div>
        <div className='play-time flex-block'>
          <img src={timeIcon} alt='' className='icon' />
          <span>Время в игре: </span>
          <span className='bold'>{pers.playTime}</span>
        </div>
        <div className='delete flex-block' onClick={deleteCharacter}>
          <DeleteSvg />
          <span>Удалить персонажа</span>
        </div>
      </div>
    </div>
  )
})
