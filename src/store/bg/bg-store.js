import { makeAutoObservable } from 'mobx'

class BgStore {
  active = false

  constructor () {
    makeAutoObservable(this)
  }

  setActive = () => (this.active = !this.active)
}

export default new BgStore()
