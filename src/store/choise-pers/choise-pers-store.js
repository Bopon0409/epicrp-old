import { makeAutoObservable } from 'mobx'

class ChoisePersStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    componentActive: false,
    data: [],
    currentPers: 0
  }

  setCurrentPers = current => (this.state.currentPers = current)
  setChoicePers = data => {
    this.state.data = data ? data : []
    this.state.componentActive = !this.state.componentActive
  }
  clickPlay = () => {
    const { name, surname } = this.state.persData[this.state.currentPers]
    if (window.mp) window.mp.trigger('userSelectedCharacter', name, surname)
  }
}

export default new ChoisePersStore()
