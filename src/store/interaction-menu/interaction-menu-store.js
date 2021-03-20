import { makeAutoObservable } from 'mobx'

class InteractionMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    active: false,
    currentText: 'Закрыть меню',
    currentSubText: ''
  }

  setInteractionMenuActive = active => (this.state.active = active)
  setCurrentText = text => (this.state.currentText = text)
  setCurrentSubText = text => (this.state.currentSubText = text)
}

export default new InteractionMenuStore()
