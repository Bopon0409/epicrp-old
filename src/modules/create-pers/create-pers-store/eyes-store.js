import { makeAutoObservable } from 'mobx'
import mainStore              from './create-pers-store'
import { randomInt }          from '../../../services/services'

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

  random = () => {
    const colors = mainStore.state.serverData.colorEyes
    const color = colors[randomInt(0, colors.length - 1)].color
    this.onValueChange(randomInt(-100, 100) / 100, 'eyeSize')
    this.onValueChange(color, 'colorEyes')
  }

  onValueChange = (value, valueName) => {
    value = isNaN(value) ? value : Number(value)
    if (typeof value === 'number')
      value = (value ^ 0) === value ? value : Number(value.toFixed(2))
    this.state[valueName].value = value
    window.frontTrigger('character.update', valueName, value)
  }
}

export default new EyesStore()
