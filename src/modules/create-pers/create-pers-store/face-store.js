import { makeAutoObservable } from 'mobx'
import { randomInt }          from '../../../services/services'

const initState = {
  noseWidth: { value: 0, valueName: 'noseWidth', title: 'Ширина носа' },
  noseHeight: { value: 0, valueName: 'noseHeight', title: 'Высота носа' },
  noseTipLength: {
    value: 0,
    valueName: 'noseTipLength',
    title: 'Длина кончика носа'
  },
  depthOfTheBridgeOfTheNose: {
    value: 0,
    valueName: 'depthOfTheBridgeOfTheNose',
    title: 'Глубина моста носа'
  },
  brokenNose: {
    value: 0,
    valueName: 'brokenNose',
    title: 'Поломанность носа'
  },
  eyebrowHeight: {
    value: 0,
    valueName: 'eyebrowHeight',
    title: 'Высота бровей'
  },
  heightOfCheekbones: {
    value: 0,
    valueName: 'heightOfCheekbones',
    title: 'Высота скул'
  },
  cheekboneWidth: {
    value: 0,
    valueName: 'cheekboneWidth',
    title: 'Ширина скул'
  },
  cheekDepth: { value: 0, valueName: 'cheekDepth', title: 'Глубина щеки' },
  lipThickness: {
    value: 0,
    valueName: 'lipThickness',
    title: 'Толщина губ'
  },
  jawWidth: { value: 0, valueName: 'jawWidth', title: 'Ширина челюсти' },
  jawShape: { value: 0, valueName: 'jawShape', title: 'Форма челюсти' },
  chinHeight: {
    value: 0,
    valueName: 'chinHeight',
    title: 'Высота подбородка'
  },
  chinDepth: {
    value: 0,
    valueName: 'chinDepth',
    title: 'Глубина подбородка'
  },
  chinIndent: {
    value: 0,
    valueName: 'chinIndent',
    title: 'Отступ подбородка'
  }
}

class FaceStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = initState

  clear = () => this.state = initState

  randomSlider = () => randomInt(-100, 100) / 100

  random = () => {
    this.onValueChange(this.randomSlider(), 'noseWidth')
    this.onValueChange(this.randomSlider(), 'noseHeight')
    this.onValueChange(this.randomSlider(), 'noseTipLength')
    this.onValueChange(this.randomSlider(), 'depthOfTheBridgeOfTheNose')
    this.onValueChange(this.randomSlider(), 'brokenNose')
    this.onValueChange(this.randomSlider(), 'eyebrowHeight')
    this.onValueChange(this.randomSlider(), 'heightOfCheekbones')
    this.onValueChange(this.randomSlider(), 'cheekboneWidth')
    this.onValueChange(this.randomSlider(), 'cheekDepth')
    this.onValueChange(this.randomSlider(), 'lipThickness')
    this.onValueChange(this.randomSlider(), 'jawWidth')
    this.onValueChange(this.randomSlider(), 'jawShape')
    this.onValueChange(this.randomSlider(), 'chinHeight')
    this.onValueChange(this.randomSlider(), 'chinDepth')
    this.onValueChange(this.randomSlider(), 'chinIndent')
  }

  onValueChange = (value, valueName) => {
    value = isNaN(value) ? value : Number(value)
    if (typeof value === 'number')
      value = (value ^ 0) === value ? value : Number(value.toFixed(2))
    this.state[valueName].value = value
    window.frontTrigger('character.update', valueName, value)
  }
}

export default new FaceStore()
