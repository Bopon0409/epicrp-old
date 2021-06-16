import { makeAutoObservable } from 'mobx'
import { IState }             from './model'

class AdminStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    page: 0,
    player: null,
    console: [],
    chat: [],
    transport: [],
    realCars: [],
    killLogs: [],
    adminLogs: []
  }
}

const store = new AdminStore()
export { store }