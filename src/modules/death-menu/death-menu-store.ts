import { makeAutoObservable } from 'mobx'
import { IState }             from './model'

class DeathMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    timer: null,
    seconds: 0
  }

  setSeconds = (value: number) => this.state.seconds = value

  spawn = (place: 'hospital' | 'currentLocation') => {
    // @ts-ignore
    window.frontTrigger(`death-menu.${place}`)
    this.close()
  }

  open = () => {
    this.state.active = true
    this.state.seconds = 59
    this.state.timer = setInterval(() => {
      if (this.state.seconds === 0) this.spawn('hospital')
      this.setSeconds(this.state.seconds - 1)
    }, 1000)
  }

  close = () => {
    if (this.state.timer) clearInterval(this.state.timer)
    this.state = { active: false, timer: null, seconds: 0 }
  }
}

const store = new DeathMenuStore()
export { store }