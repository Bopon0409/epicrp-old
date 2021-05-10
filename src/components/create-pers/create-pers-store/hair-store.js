import { makeAutoObservable } from 'mobx'

class HairStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
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

  onValueChange = (value, valueName) => {
    this.state[valueName].value = value
    window.clientTrigger('character.update', valueName, value)
  }
}

export default new HairStore()
