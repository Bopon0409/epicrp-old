import React         from 'react'
import { observer }  from 'mobx-react-lite'
import store         from '../atm-store'
import { formatNum } from '../../../services/services'
import { Select }    from 'react-responsive-select'

export default observer(() => {
    const {
      setReceiverAccount, submitHandler, setCurrentBusiness, setCurrentHouse,
      currentInputData: { value, setValue }
    } = store
    const {
      currentPage, currentBusiness, currentHouse, businesses, houses,
      inputData: { receiverAccount }
    } = store.state

    return (
      <div className='transfer'>
        {currentPage === 'Перевод средств' && (
          <div className='transfer__input-container'>
            <div className='transfer__input-hint'>Введите счет получателя</div>
            <input type='number' className='transfer__input'
              value={receiverAccount} onChange={setReceiverAccount} />
          </div>
        )}

        <div className='transfer__input-container'>
          <div className='transfer__input-hint'>Введите необходимую сумму</div>
          <input
            type='text'
            className='transfer__input'
            value={formatNum(value, ' ')}
            onChange={setValue}
          />
        </div>

        {currentPage === 'Оплата бизнеса' && (
          <Select
            name='atm-businesses-select'
            prefix='Бизнес: '
            selectedValue={currentBusiness}
            onChange={setCurrentBusiness}
            options={businesses.map(item => ({
              value: item.id, text: item.name
            }))} />
        )}

        {currentPage === 'Оплата жилья' && (
          <Select
            name='atm-businesses-select'
            onChange={setCurrentHouse}
            selectedValue={currentHouse}
            options={houses.map(item => ({
              value: item, text: `Дом №${item}`
            }))} />
        )}

        <div className='transfer__submit-btn' onClick={submitHandler}>
          {currentPage}
        </div>
      </div>
    )
  }
)
