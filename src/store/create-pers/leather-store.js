import { makeAutoObservable } from 'mobx'

class LeatherStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    stains: { value: 1, valueName: 'stains', title: 'Пятна' },
    age: { value: 1, valueName: 'age', title: 'Возраст' },
    sunDamage: { value: 1, valueName: 'sunDamage', title: 'Урон от солнца' },
    freckles: { value: 1, valueName: 'freckles', title: 'Веснушки' },
    skinColor: { value: 0.5, valueName: 'skinColor', title: 'Цвет кожи' }
  }

  onValueChange = (value, valueName) => {
    if (typeof value === 'number')
      value = (value ^ 0) === value ? value : Number(value.toFixed(2))
    this.state[valueName].value = value
    if (window.mp) window.mp.trigger('createCharChangeValue', valueName, value)
  }
}

export default new LeatherStore()
