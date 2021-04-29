import { makeAutoObservable } from 'mobx'

class FaceStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    noseWidth: { value: 0.5, valueName: 'noseWidth', title: 'Ширина носа' },
    noseHeight: { value: 0.5, valueName: 'noseHeight', title: 'Высота носа' },
    noseTipLength: {
      value: 0.5,
      valueName: 'noseTipLength',
      title: 'Длина кончика носа'
    },
    depthOfTheBridgeOfTheNose: {
      value: 0.5,
      valueName: 'depthOfTheBridgeOfTheNose',
      title: 'Глубина моста носа'
    },
    brokenNose: {
      value: 0.5,
      valueName: 'brokenNose',
      title: 'Поломоность носа'
    },
    eyebrowHeight: {
      value: 0.5,
      valueName: 'eyebrowHeight',
      title: 'Высота бровей'
    },
    heightOfCheekbones: {
      value: 0.5,
      valueName: 'heightOfCheekbones',
      title: 'Высота скул'
    },
    cheekboneWidth: {
      value: 0.5,
      valueName: 'cheekboneWidth',
      title: 'Ширина скул'
    },
    cheekDepth: { value: 0.5, valueName: 'cheekDepth', title: 'Глубина щеки' },
    lipThickness: {
      value: 0.5,
      valueName: 'lipThickness',
      title: 'Толщина губ'
    },
    jawWidth: { value: 0.5, valueName: 'jawWidth', title: 'Ширина челюсти' },
    jawShape: { value: 0.5, valueName: 'jawShape', title: 'Форма челюсти' },
    chinHeight: {
      value: 0.5,
      valueName: 'chinHeight',
      title: 'Высота подбородка'
    },
    chinDepth: {
      value: 0.5,
      valueName: 'chinDepth',
      title: 'Глубина подбородка'
    },
    chinIndent: {
      value: 0.5,
      valueName: 'chinIndent',
      title: 'Отступ подборода'
    }
  }

  onValueChange = (value, valueName) => {
    if (typeof value === 'number')
      value = (value ^ 0) === value ? value : Number(value.toFixed(2))
    this.state[valueName].value = value
    window.clientTrigger('character.update', valueName, value)
  }
}

export default new FaceStore()
