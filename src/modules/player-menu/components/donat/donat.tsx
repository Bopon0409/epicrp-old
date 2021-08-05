import { observer }   from 'mobx-react-lite'
import './donat.scss'
import { donatStore } from './donat-store'

import { MainPage }        from './components/main-page'
import { DonateWarehouse } from './components/warehouse-page'
import { LuckyCase }       from './components/lucky-case-page'
import { PrizePage }       from './components/prize-page'

export const Donat = observer(() => {
  const { makeConfirmMove, hideConfirmWindow } = donatStore
  return (
    <>
      {ShowPage()}
      {donatStore.confirmWindow.show ?
        (<div className='donat-move_confirm'>
          <div className='blur-bg' />
          <div>
            <div className='move_confirm-info_block'>
              {donatStore.confirmWindow.text.map((text, id) => (
                <span key={id}>{text}</span>
              ))}
            </div>

            <div className='move_confirm-buttons'>
              <div className='cancel'
                onClick={() => hideConfirmWindow()}>{donatStore.confirmWindow.buttons[0][0]}</div>
              <div className='accept'
                onClick={() => makeConfirmMove()}>{donatStore.confirmWindow.buttons[1][0]}</div>
            </div>
          </div>
        </div>) : null
      }
    </>
  )
})

const ShowPage = () => {
  switch (donatStore.page) {
    case 0:
      return <MainPage />
    case 1:
      return <LuckyCase />
    case 2:
      return <PrizePage />
    case 4:
      return <DonateWarehouse />
    default:
      return null
  }
}