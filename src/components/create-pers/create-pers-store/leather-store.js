import { makeAutoObservable } from 'mobx'

class LeatherStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    stains: { value: 1, valueName: 'stains', title: 'Пятна' },
    leatherAge: { value: 1, valueName: 'leatherAge', title: 'Возраст кожи' },
    sunDamage: { value: 1, valueName: 'sunDamage', title: 'Урон от солнца' },
    freckles: { value: 1, valueName: 'freckles', title: 'Веснушки' }
  }

  onValueChange = (value, valueName) => {
    if (typeof value === 'number')
      value = (value ^ 0) === value ? value : Number(value.toFixed(2))
    this.state[valueName].value = value
    window.clientTrigger('character.update', valueName, value)
  }
}

export default new LeatherStore()