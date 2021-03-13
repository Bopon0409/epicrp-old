import { makeAutoObservable } from 'mobx'

class EyesStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    typeEyes: { value: 1, valueName: 'typeEyes', title: 'Вариант глаз' },
    colorEyes: { value: '#324835', valueName: 'colorEyes', title: 'Цвет глаз' }
  }

  onValueChange = (value, valueName) => {
    this.state[valueName].value = value
    if (window.mp) window.mp.trigger('createCharChangeValue', valueName, value)
  }
}

export default new EyesStore()
