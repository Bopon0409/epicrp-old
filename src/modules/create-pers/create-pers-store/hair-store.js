import { makeAutoObservable } from 'mobx'
import mainStore              from './create-pers-store'
import { randomInt }          from '../../../services/services'
import { hairsId }            from './data'

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
    const hairs = isMale ? hairsId[0] : hairsId[1]
    const randomHair = hairs[randomInt(0, hairs.length - 1)]

    const color1 = colors[randomInt(0, colors.length - 1)].color
    const color2 = colors[randomInt(0, colors.length - 1)].color
    const color3 = colors[randomInt(0, colors.length - 1)].color

    this.onValueChange(randomInt(0, 33), 'eyebrows')
    this.onValueChange(color1, 'colorEyebrows')

    this.onValueChange(randomHair, 'hairstyle')
    this.onValueChange(color3, 'colorHairstyle')

    if (isMale) {
      this.onValueChange(color2, 'colorBeard')
      this.onValueChange(randomInt(0, 28), 'beard')
    }
  }

  onValueChange = (value, valueName) => {
    value = isNaN(value) ? value : Number(value)
    this.state[valueName].value = value
    window.frontTrigger('character.update', valueName, value)
  }
}

export default new

HairStore()
