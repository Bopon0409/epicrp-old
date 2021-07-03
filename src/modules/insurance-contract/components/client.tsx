import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../insurance-contract-store'
import logoIcon     from '../img/bank-logo.svg'
import sealIcon     from '../img/seal.svg'
// @ts-ignore
import SignaturePad from 'react-signature-pad-wrapper'

export const Client = observer(() => {
  const { state: { tariff, names, date, signature } } = store
  return (
    <div className='tablet'>
      <img src={logoIcon} alt='' className='tablet__logo' />
      <div className='tablet__title'>Страховой договор</div>
      <div className='tablet__text'>
        Excellent Bank - далее именуемый “Страховщик”, в лице {names[0]}, и
        гражданин Америки {names[1]}, далее именуемый “Выгодоприобретатель”,
        заключили договор о нижеследующем:
      </div>
      <div className='tablet__title'>Предмет договора</div>
      <div className='tablet__text'>
        1.1 Страховщик обязуется предоставить выгодоприобретателю страхование с
        тарифом {tariff} которые используются выгодоприобретателем на условиях
        данного договора.
        1.2 Выгодоприобретатель оформляет страхование на условиях действующего
        договора.
        1.3 Страхование предоставляется на срок один(1) календарный месяц со дня
        оформления договора.
        1.4 Сумма возвратных средств выгодоприобретателю за несчастные случаи во
        время владения страховым полисом является $5.000.
      </div>
      <div className='tablet__title'>Порядок предоставления страховки</div>
      <div className='tablet__text'>
        2.1 Для получения страховки выгодоприобретатель предоставляет
        страховщику следующие документы:
        <ul>
          <li>Заявление на получение страховки</li>
          <li>Справку о состоянии здоровья</li>
          <li>Документ удостоверяющий личность гражданина Америки</li>
          <li>Документы подтверждающие владение собственностью</li>
        </ul>
        2.2 Датой выплаты страховки по настоящему договору выгодоприобретателю
        является дата зачисления денежных средств на банковский счёт
        выгодоприобретателя.
      </div>
      <div className='footer'>
        <div className='footer__date'>{date?.toLocaleDateString()}</div>
        <div className='footer__seal'>
          <img src={sealIcon} alt='' className='bank-seal' />
        </div>
        <div className='footer__signature'>
          <div className='signature-container'>
            <img src={signature} alt='' />
            <div className='footer__name'>{names[0]}</div>
          </div>
          <div className='signature-container'>
            <SignaturePad ref={(ref: any) => store.setRef(ref)} options={{
              minWidth: 0.8, maxWidth: 1, penColor: '#000000'
            }} />
            <div className='footer__name'>{names[1]}</div>
          </div>
        </div>
      </div>
    </div>
  )
})