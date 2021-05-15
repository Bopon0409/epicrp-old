import { makeAutoObservable } from 'mobx'

class ChoicePersStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    componentActive: false,
    data: [],
    currentPers: 0
  }

  setCurrentPers = current => (this.state.currentPers = current)

  setChoicePers = (active, data) => {
    console.log(data)
    this.state.data = data ? data : []
    this.state.componentActive = active
  }

  clickPlay = () => {
    const { name, surname } = this.state.data[this.state.currentPers]
    window.frontTrigger('character.selected', name, surname)
  }
}

export default new ChoicePersStore()
