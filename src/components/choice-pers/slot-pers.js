import React from 'react'

import regIcon from './images/reg-icon.svg'
import timeIcon from './images/time-icon.svg'

import addPersIcon from './images/add-pers.svg'
import buySlotIcon from './images/buy-slot.svg'

export default function SlotPers ({ pers, active, index, setCurrentPers }) {
  if (pers.empty && pers.bought === false)
    return (
      <div className='empty-slot'>
        <img src={buySlotIcon} alt='' className='icon' />
        <div className='text'>Купить дополнительный слот</div>
      </div>
    )

  if (pers.empty)
    return (
      <div className='empty-slot'>
        <img src={addPersIcon} alt='' className='icon' />
        <div className='text'>Создать персонажа</div>
      </div>
    )

  const slotClass = active ? 'slot-pers active-pers' : 'slot-pers'
  return (
    <div className={slotClass} onClick={() => setCurrentPers(index)}>
      <div className='light-hover'></div>
      <div className='name-pers'>
        <span className='name'>{pers.name}</span>
        <span className='surname'>{pers.surname}</span>
      </div>
      <div className='details'>
        <div className='lvl'>
          <span className='bold'>{pers.lvl}</span>
          <span>Уровень</span>
        </div>
        <div className='fraction'>
          <span className='bold'>{pers.fraction}</span>
        </div>
        <div className='money'>
          <span className='bold'>{pers.money}</span>
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
        <div className='delete flex-block'>
          <svg
            className='icon'
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0)'>
              <path
                className='delete-svg'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.8125 1.125C2.51413 1.125 2.22798 1.24353 2.017 1.4545C1.80603 1.66548 1.6875 1.95163 1.6875 2.25V3.375C1.6875 3.67337 1.80603 3.95952 2.017 4.1705C2.22798 4.38147 2.51413 4.5 2.8125 4.5H3.375V14.625C3.375 15.2217 3.61205 15.794 4.03401 16.216C4.45597 16.6379 5.02826 16.875 5.625 16.875H12.375C12.9717 16.875 13.544 16.6379 13.966 16.216C14.3879 15.794 14.625 15.2217 14.625 14.625V4.5H15.1875C15.4859 4.5 15.772 4.38147 15.983 4.1705C16.194 3.95952 16.3125 3.67337 16.3125 3.375V2.25C16.3125 1.95163 16.194 1.66548 15.983 1.4545C15.772 1.24353 15.4859 1.125 15.1875 1.125H11.25C11.25 0.826631 11.1315 0.540483 10.9205 0.329505C10.7095 0.118526 10.4234 0 10.125 0L7.875 0C7.57663 0 7.29048 0.118526 7.0795 0.329505C6.86853 0.540483 6.75 0.826631 6.75 1.125H2.8125ZM6.1875 5.625C6.33668 5.625 6.47976 5.68426 6.58525 5.78975C6.69074 5.89524 6.75 6.03832 6.75 6.1875V14.0625C6.75 14.2117 6.69074 14.3548 6.58525 14.4602C6.47976 14.5657 6.33668 14.625 6.1875 14.625C6.03832 14.625 5.89524 14.5657 5.78975 14.4602C5.68426 14.3548 5.625 14.2117 5.625 14.0625V6.1875C5.625 6.03832 5.68426 5.89524 5.78975 5.78975C5.89524 5.68426 6.03832 5.625 6.1875 5.625ZM9 5.625C9.14918 5.625 9.29226 5.68426 9.39775 5.78975C9.50324 5.89524 9.5625 6.03832 9.5625 6.1875V14.0625C9.5625 14.2117 9.50324 14.3548 9.39775 14.4602C9.29226 14.5657 9.14918 14.625 9 14.625C8.85082 14.625 8.70774 14.5657 8.60225 14.4602C8.49676 14.3548 8.4375 14.2117 8.4375 14.0625V6.1875C8.4375 6.03832 8.49676 5.89524 8.60225 5.78975C8.70774 5.68426 8.85082 5.625 9 5.625ZM12.375 6.1875C12.375 6.03832 12.3157 5.89524 12.2102 5.78975C12.1048 5.68426 11.9617 5.625 11.8125 5.625C11.6633 5.625 11.5202 5.68426 11.4148 5.78975C11.3093 5.89524 11.25 6.03832 11.25 6.1875V14.0625C11.25 14.2117 11.3093 14.3548 11.4148 14.4602C11.5202 14.5657 11.6633 14.625 11.8125 14.625C11.9617 14.625 12.1048 14.5657 12.2102 14.4602C12.3157 14.3548 12.375 14.2117 12.375 14.0625V6.1875Z'
                fill='white'
                fillOpacity='0.5'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='18' height='18' fill='white' />
              </clipPath>
            </defs>
          </svg>

          <span>Удалить персонажа</span>
        </div>
      </div>
    </div>
  )
}
