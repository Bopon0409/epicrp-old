import { useEffect } from 'react'
import { observer }  from 'mobx-react-lite'
import { store }     from './download-confirmation-screen-store'
import { CargoInfo } from './constants'
import './download-confirmation-screen.scss'

export const DownloadConfirmationScreen = observer(() => {
  useEffect(() => {
    // @ts-ignore
    const { EventManager: em } = window
    const { setShow, setData } = store
    em.addHandler('download-confirmation-screen.data', setData)
    em.addHandler('download-confirmation-screen.show', setShow)
    return () => {
      em.removeHandler('download-confirmation-screen.show', setShow)
      em.removeHandler('download-confirmation-screen.data', setData)
    }
  }, [])
  const { typeofCargo } = store.state.data

  return store.state.show && store.state.data.typeofCargo !== -1 ? (
    <div className='download-confirmation-screen-wrapper'>
      <div className='download-confirmation-screen'>
        <div className='types'>
          <span>ТИП ЗАГРУЖАЕМОГО ТОВАРА</span>
          <span>{CargoInfo[typeofCargo].type.toUpperCase()}</span>
        </div>
        <div className='image-and-about'>
          <div className='image'>
            <img src={CargoInfo[typeofCargo].image} alt='' />
          </div>
          <div className='about-info'>{CargoInfo[typeofCargo].infoAbout}</div>
        </div>
        <div className='btn-download' onClick={() => store.downloadConfirm()}>
          Загрузить
        </div>
      </div>
    </div>
  ) : null
})
