import { makeAutoObservable } from 'mobx'

class ChoisePersStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    componentActive: false,
    persData: [],
    currentPers: 0
  }

  setCurrentPers = current => (this.state.currentPers = current)
  setChoicePersActive = active => (this.state.componentActive = active)
  pushPersData = data => (this.state.persData = data)
}

export default new ChoisePersStore()
