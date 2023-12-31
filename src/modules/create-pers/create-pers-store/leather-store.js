import { makeAutoObservable } from 'mobx'
import { randomInt }          from '../../../services/services'

const initState = {
  stains: { value: 0, valueName: 'stains', title: 'Пятна' },
  leatherAge: { value: 0, valueName: 'leatherAge', title: 'Возраст кожи' },
  sunDamage: { value: 0, valueName: 'sunDamage', title: 'Урон от солнца' },
  freckles: { value: 0, valueName: 'freckles', title: 'Веснушки' }
}

class LeatherStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = initState

  clear = () => this.state = initState

  random = () => {
    this.onValueChange(randomInt(0, 6), 'stains')
    this.onValueChange(randomInt(0, 6), 'leatherAge')
    this.onValueChange(randomInt(0, 6), 'sunDamage')
    this.onValueChange(randomInt(0, 6), 'freckles')
  }

  onValueChange = (value, valueName) => {
    value = isNaN(value) ? value : Number(value)
    if (typeof value === 'number')
      value = (value ^ 0) === value ? value : Number(value.toFixed(2))
    this.state[valueName].value = value
    window.frontTrigger('character.update', valueName, value)
  }
}

export default new LeatherStore()
