import React                                   from 'react'
import { observer }                            from 'mobx-react-lite'
import store                                   from '../fraction-store'
import { Select, CaretIcon, ModalCloseButton } from 'react-responsive-select'
import classNames                              from 'classnames'
import 'react-responsive-select/dist/react-responsive-select.css'
import Icon                                    from './icon'

export default observer(() => {
  const { active, name, boss, ranks } = store.state.modalGroupCreate
  const {
    setGroupCreateModalName, setGroupCreateModalBoss, groupCreateSubmit,
    toggleGroupCreateModalRank, groupCreateSelectList, groupCreateClose
  } = store

  const rankList = ranks.map(({ rankNum, rankName, color, value }, i) => {
    const checkBoxClasses = classNames(
      'checkbox', value && 'checkbox__active')
    const handler = () => toggleGroupCreateModalRank(rankNum)

    return <div className='rank__item' key={i} onClick={handler}>
      <div className={checkBoxClasses} />
      <div className='color' style={{ background: color }} />
      <div className='name'>{rankName}</div>
    </div>
  })

  const selectList = groupCreateSelectList.length ?
    groupCreateSelectList :
    [{ value: '', text: '' }]

  return active ? (
    <div className='group-create'>
      <div className='close-btn' onClick={groupCreateClose}>
        <Icon icon='close' />
      </div>
      <div className='input-label'>Введите название отдела</div>
      <input type='text' value={name} className='name-input'
        onChange={e => setGroupCreateModalName(e.target.value)} />
      <div className='input-label'>Выберете начальника отдела</div>
      <Select
        name='boss-select'
        modalCloseButton={<ModalCloseButton />}
        options={selectList}
        caretIcon={<CaretIcon />}
        selectedValue={boss.value}
        onChange={newValue => setGroupCreateModalBoss(newValue)}
      />
      <div className='input-label'>Настройки рангов</div>
      <div className='ranks-container skroll'>{rankList}</div>
      <div className='submit-btn' onClick={groupCreateSubmit}>
        <div className='text'>Создать отдел</div>
      </div>
    </div>
  ) : null
})