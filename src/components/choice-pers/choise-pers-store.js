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

  setCurrentPers = current => {
    if (this.state.currentPers !== current) {
      window.frontTrigger('character.select', current)
      this.state.currentPers = current
    }
  }

  deleteCharacter = () => {
    window.frontTrigger('character.delete', this.state.currentPers)
  }

  setChoicePers = (active, data) => {
    this.state.data = data ? data : []
    this.state.componentActive = active
  }

  clickPlay = () => {
    const { name, surname } = this.state.data[this.state.currentPers]
    window.frontTrigger('character.play', name, surname)
  }
}

export default new ChoicePersStore()
