import { makeAutoObservable } from 'mobx'
import mainStore              from './create-pers-store'
import { randomInt }          from '../../../services/services'

const initState = {
  eyebrows: { value: 0, valueName: 'eyebrows', title: 'Брови' },
  colorEyebrows: {
    value: '#242323',
    valueName: 'colorEyebrows',
    title: 'Цвет Бровей'
  },
  beard: { value: 0, valueName: 'beard', title: 'Борода/Усы' },
  colorBeard: {
    value: '#242323',
    valueName: 'colorBeard',
    title: 'Цвет Бороды/Усов'
  },
  hairstyle: { value: 0, valueName: 'hairstyle', title: 'Прическа' },
  colorHairstyle: {
    value: '#242323',
    valueName: 'colorHairstyle',
    title: 'Цвет прически'
  }
}

class HairStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = initState

  clear = () => this.state = initState

  random = () => {
    const isMale = mainStore.state.step1.sex === 'male'
    const colors = mainStore.state.serverData.colorHair
    const color1 = colors[randomInt(0, colors.length - 1)].color
    const color2 = colors[randomInt(0, colors.length - 1)].color
    const color3 = colors[randomInt(0, colors.length - 1)].color
    this.onValueChange(color1, 'colorEyebrows')
    if (isMale) this.onValueChange(color2, 'colorBeard')
    this.onValueChange(color3, 'colorHairstyle')
    this.onValueChange(randomInt(0, 33), 'eyebrows')
    if (isMale) this.onValueChange(randomInt(0, 28), 'beard')
  }

  onValueChange = (value, valueName) => {
    value = isNaN(value) ? value : Number(value)
    this.state[valueName].value = value
    window.frontTrigger('character.update', valueName, value)
  }
}

export default new

HairStore()
