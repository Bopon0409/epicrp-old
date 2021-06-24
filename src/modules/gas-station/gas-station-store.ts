import { makeAutoObservable } from 'mobx'

class GasStationStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {}
}

const store = new GasStationStore()
export { store }