import { makeAutoObservable } from 'mobx'
import mainStore              from '../create-pers-store/create-pers-store'
import { randomInt }          from '../../../services/services'

const initState = {
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

class ClothesStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = initState

  clear = () => this.state = initState

  random = () => {
    const { shirts, pants, shoes } = mainStore.state.serverData

    const rShirt = shirts[randomInt(0, shirts.length - 1)]
    const rShirtColor = rShirt.colors[randomInt(0, rShirt.colors.length - 1)]
    const rPants = pants[randomInt(0, pants.length - 1)]
    const rPantsColor = rPants.colors[randomInt(0, rPants.colors.length - 1)]
    const rShoes = shoes[randomInt(0, shoes.length - 1)]
    const rShoesColor = rShoes.colors[randomInt(0, rShoes.colors.length - 1)]

    this.onValueChange(rShirt.id, 'shirt')
    this.onValueChange(rShirtColor.color, 'colorShirt')
    this.onValueChange(rPants.id, 'pants')
    this.onValueChange(rPantsColor.color, 'colorPaints')
    this.onValueChange(rShoes.id, 'shoes')
    this.onValueChange(rShoesColor.color, 'colorShoes')
  }

  onValueChange = (value, valueName) => {
    value = isNaN(value) ? value : Number(value)
    this.state[valueName].value = value
    window.frontTrigger('character.update', valueName, value)
  }
}

export default new ClothesStore()
