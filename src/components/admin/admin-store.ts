import { makeAutoObservable } from 'mobx'

class AdminStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {}
}

const store = new AdminStore()
export { store }