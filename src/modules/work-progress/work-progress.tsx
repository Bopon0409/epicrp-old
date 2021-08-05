import { useEffect } from 'react'
import { observer }  from 'mobx-react-lite'
import { store }     from './work-progress-store'
import './work-progress.scss'

export const WorkProgress = observer(() => {
  const { name, about, min, max, time } = store.state.progressInfo
  const ProgressBarAnimtation = {
    animation: `ProgressBarAnim linear ${time}s`
  }
  useEffect(() => {
    const { EventManager: em } = window
    const { setActive, setData } = store
    em.addHandler('work-progress.active', setActive)
    em.addHandler('work-progress.data', setData)
    return () => {
      em.removeHandler('work-progress.active', setActive)
      em.removeHandler('work-progress.data', setData)
    }
  }, [])

  return store.state.active ? (
    <div className='progress-bar-window'>
      <div className='content'>
        <div className='name'>{name}</div>
        <div className='about'>{about}</div>
        <div className='progress-block'>
          <div className='bar'>
            <div className='progress' style={ProgressBarAnimtation} />
          </div>
          <div className='amount'>
            <div className='amount-min'>{min}</div>
            <div className='amount-max'>{max}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null
})
