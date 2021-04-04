import { makeAutoObservable } from 'mobx'

class BgStore {
  active = false

  constructor () {
    makeAutoObservable(this)
  }

  setActive = active => (this.active = active)
}

export default new BgStore()
