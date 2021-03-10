import { makeAutoObservable } from 'mobx'

class ChoisePersStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  store = {
    componentActive: false,
    persData: [],
    currentPers: 0
  }

  setCurrentPers = current => (this.store.currentPers = current)
  setChoicePersActive = active => (this.store.componentActive = active)
  pushPersData = data => (this.store.persData = data)
}

export default new ChoisePersStore()
