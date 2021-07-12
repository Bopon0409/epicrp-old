import { useEffect }                  from 'react'
import { observer }                   from 'mobx-react-lite'
import { store }                      from './medSertificate-store'
import './medSertificate.scss'
import { MedSrtTypes, MedSrtResults } from '../constants'

export const MedSertificate = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setActive, setData } = store
    em.addHandler('ems-med-sertificate.active', setActive)
    em.addHandler('ems-med-sertificate.data', setData)
    return () => {
      em.removeHandler('ems-med-sertificate.active', setActive)
      em.removeHandler('ems-med-sertificate.data', setData)
    }
  }, [])
  const { type, name, doctor, date } = store.state.data

  return store.state.active ? (
    <div className='wrapper'>
      <div className='med-sertificate'>
        <div className='name'>Медицинская справка</div>
        <div className='reason'>
          {MedSrtTypes[type].toLowerCase()}
        </div>
        <div className='doctorResult'>{store.state.data.doctorResult}</div>
        <div className='result'>
          <div className='med-sertificate-was-issues'>
            Данная справка выдана гражданину {name}
          </div>
          <div>{MedSrtResults[type]}</div>
        </div>

        <div className='med-sertificate-doctor_and_date'>
          <div>
            <span>Выдано врачём:</span>
            <span>{doctor}</span>
          </div>
          <div>
            <span>Срок действия до:</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className='ESC-close'>
        <span>ESC</span> - закрыть
      </div>
    </div>
  ) : null
})