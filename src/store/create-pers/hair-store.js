import { makeAutoObservable } from 'mobx'

class HairStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    beard: { value: 1, valueName: 'beard', title: 'Борода/Усы' },
    colorBeard: {
      value: '#242323',
      valueName: 'colorBeard',
      title: 'Цвет Бороды/Усов'
    },
    hairstyle: { value: 1, valueName: 'hairstyle', title: 'Прическа' },
    colorHairstyle: {
      value: '#242323',
      valueName: 'colorHairstyle',
      title: 'Цвет прически'
    }
  }

  onValueChange = (value, valueName) => {
    this.state[valueName].value = value
    if (window.mp) window.mp.trigger('createCharChangeValue', valueName, value)
  }
}

export default new HairStore()
