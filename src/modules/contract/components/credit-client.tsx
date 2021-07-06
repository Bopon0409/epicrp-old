import React        from 'react'
import { observer } from 'mobx-react-lite'
import { store }    from '../contract-store'
import logoIcon     from '../img/bank-logo.svg'
import sealIcon     from '../img/seal.svg'
// @ts-ignore
import SignaturePad from 'react-signature-pad-wrapper'

export const CreditClient = observer(() => {
  const { names, date, sum, rate, signature, property } = store.state
  const { creditSumClient, dailyPaymentClient, submit, clear } = store

  return (
    <div className='tablet'>
      <img src={logoIcon} alt='' className='tablet__logo' />
      <div className='tablet__title'>Страховой договор</div>
      <div className='tablet__text'>
        Excellent Bank - далее именуемый “Кредитор”, в лице {names[0]}, и
        гражданин Америки {names[1]}, далее именуемый “Заёмщик”, заключили
        договор о нижеследующем:
      </div>
      <div className='tablet__title'>Предмет договора</div>
      <div className='tablet__text'>
        1.1 Кредитор обязуется предоставить заёмщику долгосрочный кредит в сумме
        ${sum}которые используются заёмщиком в личных целях.
        <br />
        1.2 Заёмщик берёт кредит на условиях установленных настоящим договором и
        обязуется соблюдать условия предоставления кредита, а так же возвратить
        полученную денежную сумму и уплатить проценты на неё, в сроки и условия
        которых прописаны в настоящем договоре.
        <br />
        1.3 Кредит предоставляется на срок с {date?.toLocaleDateString()} по
        <br />
        1.4 Условием возникновения прав и обязанностей Сторон по настоящему
        договору является вступление в силу договора залога имущества
        ${property?.name} оценочной стоимостью в ${property?.price}.
        <br />
        1.5 Сумма возвратных средств по настоящему договору ${creditSumClient},
        сумма процента по настоящему договору {rate * 100}% суточных, сумма
        ежедневного платежа ${dailyPaymentClient}.
      </div>
      <div className='tablet__title'>Порядок предоставления кредита</div>
      <div className='tablet__text'>
        2.1 Для получения кредита заёмщик предоставляет кредитору следующие
        документы:
        <ul>
          <li>Заявление на получение кредита</li>
          <li>Справку о доходах</li>
          <li>Документ удостоверяющий личность гражданина Америки</li>
          <li>Документы подтверждающие собственность на залоговое имущество</li>
        </ul>
        2.2 Датой предоставления кредита по настоящему договору заёмщику
        является дата зачисления денежных средств на банковский счёт заёмщика.
        2.3 Датой возврата кредита заёмщиком считается день поступления денежных
        средств от заёмщика в соответствии с пунктом 1.3 настоящего договора,
        покрывающий объём требований кредитора по настоящему договору.
        2.4 В случае невыполнения заёмщиком требований согласно пункта 1.3
        настоящего договора, залоговое имущество указанное в пункте 1.4
        настоящего договора изымается с последующей реализацией его в пользу
        кредитора.
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
            <SignaturePad className='signature' options={{
              minWidth: 0.8, maxWidth: 1, penColor: '#000000'
            }} ref={(ref: any) => store.setRef(ref)} />
            <div className='footer__name'>{names[0]}</div>
          </div>
        </div>
      </div>

      <div className='buttons'>
        <div className='button' onClick={clear}>
          <div className='text'>Очистить поле</div>
        </div>
        <div className='button' onClick={submit}>
          <div className='text'>Продолжить</div>
        </div>
      </div>
    </div>
  )
})