import { makeAutoObservable } from 'mobx'

class EyesStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    eyeSize: { value: 0.5, valueName: 'eyeSize', title: 'Размер глаз' },
    colorEyes: { value: '#324835', valueName: 'colorEyes', title: 'Цвет глаз' }
  }

  onValueChange = (value, valueName) => {
    if (typeof value === 'number')
      value = (value ^ 0) === value ? value : Number(value.toFixed(2))
    this.state[valueName].value = value
    if (window.mp) window.mp.trigger('createCharChangeValue', valueName, value)
  }
}

export default new EyesStore()
