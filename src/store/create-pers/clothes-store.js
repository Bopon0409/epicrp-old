import { makeAutoObservable } from 'mobx'

class ClothesStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    shirt: { value: 1, valueName: 'shirt', title: 'Майка' },
    colorShirt: {
      value: '#242323',
      valueName: 'colorShirt',
      title: 'Цвет майки'
    },
    pants: { value: 1, valueName: 'pants', title: 'Штаны' },
    colorPaints: {
      value: '#242323',
      valueName: 'colorPaints',
      title: 'Цвет штанов'
    },
    shoes: { value: 1, valueName: 'shoes', title: 'Обувь' },
    colorShoes: {
      value: '#242323',
      valueName: 'colorShoes',
      title: 'Цвет обуви'
    }
  }

  onValueChange = (value, valueName) => {
    this.state[valueName].value = value
    if (window.mp) window.mp.trigger('createCharChangeValue', valueName, value)
  }
}

export default new ClothesStore()
