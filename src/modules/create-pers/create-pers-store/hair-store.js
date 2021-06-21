import { makeAutoObservable } from 'mobx'

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

  onValueChange = (value, valueName) => {
    value = isNaN(value) ? value : Number(value)
    this.state[valueName].value = value
    window.frontTrigger('character.update', valueName, value)
  }
}

export default new HairStore()
