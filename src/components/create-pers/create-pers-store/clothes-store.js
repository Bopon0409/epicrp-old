import { makeAutoObservable } from 'mobx'

class ClothesStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    shirt: { value: 0, valueName: 'shirt', title: 'Майка' },
    colorShirt: {
      value: '#242323',
      valueName: 'colorShirt',
      title: 'Цвет майки'
    },
    pants: { value: 0, valueName: 'pants', title: 'Штаны' },
    colorPaints: {
      value: '#242323',
      valueName: 'colorPaints',
      title: 'Цвет штанов'
    },
    shoes: { value: 0, valueName: 'shoes', title: 'Обувь' },
    colorShoes: {
      value: '#242323',
      valueName: 'colorShoes',
      title: 'Цвет обуви'
    }
  }

  onValueChange = (value, valueName) => {
    this.state[valueName].value = value
    window.frontTrigger('character.update', valueName, value)
  }
}

export default new ClothesStore()
