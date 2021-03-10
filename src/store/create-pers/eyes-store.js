import { makeAutoObservable } from 'mobx'

class EyesStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    type: { value: 1, valueName: 'type', title: 'Вариант глаз' },
    color: { value: '#324835', valueName: 'color', title: 'Цвет глаз' }
  }

  onValueChange = (value, valueName) => {
    this.state[valueName].value = value
    window.mp.trigger('createCharChangeValue', valueName, value)
  }
}

export default new EyesStore()
