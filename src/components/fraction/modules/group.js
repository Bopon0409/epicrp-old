import React        from 'react'
import { observer } from 'mobx-react-lite'
import store        from '../fraction-store'
import expandBtn    from '../img/group_expand_btn.svg'
import classNames   from 'classnames'

export default observer(() => {
  const { groupExpand } = store.state

  const getMembersList = members => members.map((member, i) => {
      const { name, duty, rankNum, online } = member
      const rankName = store.getRankName(rankNum)
      const onlineLabel = online ? 'В сети' : 'Не в сети'
      const onlineStyle = { color: online ? '#18C61F' : '#D21818' }

      return <div className='group__member' key={i}>
        <div className='cell'>{name}</div>
        <div className='cell'>{duty}</div>
        <div className='cell'>{rankName}</div>
        <div className='cell online' style={onlineStyle}>{onlineLabel}</div>
      </div>
    }
  )

  return (
    <div className='groups-container'>
      {store.groupList.map((group, i) => {
        const {
          groupName, members, quantity, onlineQuantity, handler, groupId
        } = group
        const onlineCss = { color: onlineQuantity > 0 ? '#18C61F' : '#007621' }
        const contextMenuHandler = e => store.memberClickHandler(e, groupId)
        const imageClasses = classNames(
          'expand__image',
          groupExpand === groupId && 'expand__image-inverted'
        )

        return (
          <div className='group' key={`group${i}`} onClick={contextMenuHandler}>
            <div className='group__name'>{groupName}</div>
            <div className='group__quantity'>Сотрудников: {quantity}</div>
            <div className='group__online' style={onlineCss}>
              Онлайн: {onlineQuantity}
            </div>
            <div className='expand__button' onClick={handler}>
              {quantity ?
                <img className={imageClasses} src={expandBtn} alt='' />
                : null}
            </div>
            {groupExpand === groupId ?
              <div className='group__members-list'>
                <div className='group__member'>
                  <div className='cell'>Имя</div>
                  <div className='cell'>Должность</div>
                  <div className='cell'>Звание</div>
                  <div className='cell'>Активность</div>
                </div>
                {getMembersList(members)}
              </div> : null}
          </div>)
      })}
    </div>
  )
})