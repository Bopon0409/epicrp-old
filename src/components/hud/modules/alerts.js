import React           from 'react'
import { observer }    from 'mobx-react-lite'
import store           from '../hud-store'
import alertConfirmImg from '../images/alertConfirmImg.svg'
import alertWarningImg from '../images/alertWarningImg.svg'
import alertErrorImg   from '../images/alertErrorImg.svg'
import classNames      from 'classnames'

export default observer(() => {
  const { dialogueAccept, dialogueDecline } = store

  const getStyles = type => {
    switch (type) {
      case 'warning':
        return { img: alertWarningImg, className: 'progress-warning' }
      case 'error':
        return { img: alertErrorImg, className: 'progress-error' }
      case 'confirm':
        return { img: alertConfirmImg, className: 'progress-confirm' }
      default:
        return { img: null, className: null }
    }
  }

  const list = store.state.alerts.map(({ id, text, type }) => {

    // Диалоговое окно
    if (type === 'dialogue') return (
      <div key={id}>
        <div className='alert-dialogue'>
          <div className='wrap' />
          <div className='head'>
            <div className='text'>{text}</div>
          </div>
          <div className='progress progress-moved'>
            <div className='progress-bar progress-confirm' />
          </div>
          <div className='button' onClick={() => dialogueAccept(id)}>
            <div className='button__key'>
              <div className='text'>Y</div>
            </div>
            <div className='button__text button__text-accept'>
              <div className='text'>Принять</div>
            </div>
          </div>
          <div className='button' onClick={() => dialogueDecline(id)}>
            <div className='button__key'>
              <div className='text'>N</div>
            </div>
            <div className='button__text button__text-cancel'>
              <div className='text'>Отклонить</div>
            </div>
          </div>
        </div>
        <br />
      </div>
    )

    // Обычные уведомления
    const { img, className } = getStyles(type)
    return (
      <div key={id}>
        <div className='alert-item'>
          <div className='img-wrap'>
            {img && <img src={img} alt='' />}
          </div>
          <div className='text'>{text}</div>
          <div className='progress progress-moved'>
            <div className={classNames('progress-bar', className)} />
          </div>
        </div>
        <br />
      </div>
    )
  })

  return <div className='alerts'>{list}</div>
})
