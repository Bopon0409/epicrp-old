import { makeAutoObservable } from 'mobx'

const initState = {
  eyeSize: { value: 0, valueName: 'eyeSize', title: 'Размер глаз' },
  colorEyes: { value: '#324835', valueName: 'colorEyes', title: 'Цвет глаз' }
}

class EyesStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = initState

  clear = () => this.state = initState

  onValueChange = (value, valueName) => {
    if (typeof value === 'number')
      value = (value ^ 0) === value ? value : Number(value.toFixed(2))
    this.state[valueName].value = value
    window.frontTrigger('character.update', valueName, value)
  }
}

export default new EyesStore()
