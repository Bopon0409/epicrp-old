import { makeAutoObservable } from 'mobx'
import { IState }             from './models'

class ElectricianStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    gameType: 1,
    board: null,
    interval: null
  }
}

const store = new ElectricianStore()
export { store }