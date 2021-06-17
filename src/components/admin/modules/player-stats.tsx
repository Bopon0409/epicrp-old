import React                from 'react'
import { observer }         from 'mobx-react-lite'
import { IPlayerTransport } from '../model'
import { store }            from '../admin-store'

export const PlayerStats = observer(() => {
  const { player } = store.state
  if (!player) return null

  const getTransportStr = (transport: IPlayerTransport): string => {
    return `${transport.id} | 
    ${transport.name} | 
    ${transport.num} | 
    GID: ${transport.gid}`
  }

  return (
    <div className='player__stats'>
      <div className='player__stats-leftBlock'>
        <div className='name'>Статистика игрока</div>
        <div className='player__stats-letBlock-info'>
          <div className='info__line'>
            <span>Онлайн:</span>
            <span>
              <span className={player.online ? 'green' : 'red'}>
                {player.online ? 'Да' : 'Нет'}
              </span> |ID {player.id} | SID {player.sid}
            </span>
          </div>

          <div className='info__line'>
            <span>Nick Name:</span>
            <span>{player.name}</span>
          </div>

          <div className='info__line'>
            <span>Уровень:</span>
            <span>{player.lvl}</span>
          </div>

          <div className='info__line'>
            <span>Телефон:</span>
            <span>{player.phoneNumber}</span>
          </div>

          <div className='info__line'>
            <span>Наличные:</span>
            <span>{player.cash}</span>
          </div>

          <div className='info__line'>
            <span>Счёт #1:</span>
            <span>{player.card1}</span>
          </div>

          <div className='info__line'>
            <span>Счёт #2:</span>
            <span>{player.card2 ? player.card2 : 'Нет'}</span>
          </div>

          <div className='info__line'>
            <span>Фракция:</span>
            <span>{player.fraction}</span>
          </div>

          <div className='info__line'>
            <span>Семья:</span>
            <span>{player.family}</span>
          </div>

          <div className='info__line'>
            <span>Warn:</span>
            <span>{player.warn}</span>
          </div>

          <div className='info__line'>
            <span>Ban:</span>
            <span>{player.ban ? (
              <span><span className='red'>Активный</span> ({player.ban})</span>
            ) : 'Нет'}</span>
          </div>

          <div className='info__line'>
            <span>Social_ID:</span>
            <span>{player.socialId}</span>
          </div>

          <div className='info__line'>
            <span>Логин:</span>
            <span>{player.login}</span>
          </div>

          <div className='info__line'>
            <span>Reg_IP:</span>
            <span>{player.regIp}</span>
          </div>

          <div className='info__line'>
            <span>Last_IP:</span>
            <span>{player.lastIp}</span>
          </div>
        </div>
      </div>

      <div className='player__stats-rightBlock'>
        <div className='rightBlock-name'>Имущество</div>
        <div className='rightBlock-property'>
          <div className='rightBlock-property__building'>{
            player.property.map((property, i) =>
              <div className='info__line' key={i}>
                <span>{property.type}:</span>
                <span>{property.num}</span>
              </div>
            )
          }
          </div>
          <div className='rightBlock-property__vehicles'>{
            player.transport.map((transport, id) =>
              <div className='info__line'>
                <span>Машина #{id + 1}:</span>
                <span>{getTransportStr(transport)}</span>
              </div>
            )
          }</div>
        </div>
      </div>
    </div>
  )
})

