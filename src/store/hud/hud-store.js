import { makeAutoObservable } from 'mobx'

class HudStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }
}
