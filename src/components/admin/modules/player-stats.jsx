import React        from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../admin-store';


export const PlayerStats = observer(() => {
    const Player = store.state.player;
  return (
      <div className='player__stats'>
        <div className='player__stats-leftBlock'>
          <div className='name'>Статистика игрока</div>
          <div className='player__stats-letBlock-info'>
            <div className='info__line'>
                <span>Онлайн:</span>
                <span><span className={Player.online ? 'green' : 'red'}>{Player.online ? 'Да' : 'Нет'}</span> |
                 ID {Player.id} | SID {Player.sid}</span>
            </div>
            <div className='info__line'>
                <span>Nick Name:</span>
                <span>{Player.name}</span>
            </div>
            <div className='info__line'>
                <span>Уровень:</span>
                <span>{Player.lvl}</span>
            </div>
            <div className='info__line'>
                <span>Телефон:</span>
                <span>{Player.phoneNumber}</span>
            </div>
            <div className='info__line'>
                <span>Наличные:</span>
                <span>{Player.cash}</span>
            </div>
            <div className='info__line'>
                <span>Счёт #1:</span>
                <span>{Player.card1}</span>
            </div>
            <div className='info__line'>
                <span>Счёт #2:</span>
                <span>{Player.card2 ? Player.card2 : 'Нет'}</span>
            </div>
            <div className='info__line'>
                <span>Фракция:</span>
                <span>{Player.fraction}</span>
            </div>
            <div className='info__line'>
                <span>Семья:</span>
                <span>{Player.family}</span>
            </div>
            <div className='info__line'>
                <span>Warn:</span>
                <span>{Player.warn}</span>
            </div>
            <div className='info__line'>
                <span>Ban:</span>
                <span>{Player.ban ? <span><span className='red'>Активный</span> ({Player.ban})</span> : 'Нет'}</span>
            </div>
            <div className='info__line'>
                <span>Social_ID:</span>
                <span>{Player.socialId}</span>
            </div>
            <div className='info__line'>
                <span>Логин:</span>
                <span>{Player.login}</span>
            </div>
            <div className='info__line'>
                <span>Reg_IP:</span>
                <span>{Player.regIp}</span>
            </div>
            <div className='info__line'>
                <span>Last_IP:</span>
                <span>{Player.lastIp}</span>
            </div>
          </div>
        </div>

        <div className='player__stats-rightBlock'>
            <div className='rightBlock-name'>Имущество</div>
            <div className='rightBlock-property'>
                <div className='rightBlock-property__building'>
                {
                    Player.property.map((v, id) => {
                        return(
                            <div className='info__line'>
                                <span>{v.type}:</span>
                                <span>{v.num}</span>
                            </div>
                        )
                    })
                }
                </div>
                <div className='rightBlock-property__vehicles'>
                    {
                        Player.transport.map((v, id) => {
                            return(
                            <div className='info__line'>
                                <span>Машина #{id+1}:</span>
                                <span>{v.id} | {v.name} | {v.num} | GID: {v.gid}</span>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
      </div>
  )
});

