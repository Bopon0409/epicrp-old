import { makeAutoObservable } from 'mobx'
import { motherNames, fatherNames } from './data'

class CreatePersStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  // =================================   STATE   ===============================

  state = {
    active: false,
    step: 1,
    step1: {
      name: '',
      surname: '',
      nameErr: '',
      surnameErr: '',
      sex: 'male',
      age: '',
      ageErr: '',
      hover: false
    },
    step2: {
      activeMother: 0,
      activeFather: 0,
      sliderValue1: 0.5,
      sliderValue2: 0.5,
      motherName: 'Hannah',
      fatherName: 'Benjamin'
    },
    menuActive: 1,
    serverData: {}
  }

  // =================================   MAIN   ================================
  setStep = step => (this.state.step = step)
  setCreatePers = (active, data) => {
    if (data) this.state.serverData = data
    this.state.active = active
  }
  finishCreate = () => window.clientTrigger('character.created')

  // ================================   STEP2   ================================
  setName = value => (this.state.step1.name = value)
  setSurname = value => (this.state.step1.surname = value)
  setNameErr = value => (this.state.step1.nameErr = value)
  setSurnameErr = value => (this.state.step1.surnameErr = value)
  setSex = value => (this.state.step1.sex = value)
  setAge = value => (this.state.step1.age = value)
  setAgeErr = value => (this.state.step1.ageErr = value)
  setHover = value => (this.state.step1.hover = value)

  inputChangeHandler = (event, type) => {
    const str = event.target.value
    console.log(str)
    if (str.length > 20) return
    switch (type) {
      case 'name':
        this.setName(str)
        this.setNameErr('')
        break
      case 'surname':
        this.setSurname(str)
        this.setSurnameErr('')
        break
      case 'age':
        const numAge = Number(str)
        if (!isNaN(numAge) && numAge < 1000) this.setAge(str)
        break
      default:
        break
    }
  }

  validation = () => {
    this.setSurnameErr('')
    this.setNameErr('')
    this.setAgeErr('')

    const { name, surname, sex, age } = this.state.step1
    if (name.length < 3 || name.length > 14)
      return this.setNameErr('Недопустимая Длина')
    if (surname.length < 3 || surname.length > 14)
      return this.setSurnameErr('Недопустимая Длина')
    if (Number(age) < 14 || Number(age) > 100)
      return this.setAgeErr('Возраст не может быть больше 100 и меньше 14')

    window.clientTrigger('character.update', 'name', name)
    window.clientTrigger('character.update', 'surname', surname)
    window.clientTrigger('character.update', 'sex', sex)
    window.clientTrigger('character.update', 'age', age)

    this.setStep(2)
  }

  // ================================   STEP2   ================================

  setActiveMother = value => (this.state.step2.activeMother = value)
  setActiveFather = value => (this.state.step2.activeFather = value)
  setSliderValue1 = value => (this.state.step2.sliderValue1 = value)
  setSliderValue2 = value => (this.state.step2.sliderValue2 = value)
  setMotherName = value => (this.state.step2.motherName = value)
  setFatherName = value => (this.state.step2.fatherName = value)

  motherChangeHandler = (motherId, i) => {
    this.setActiveMother(i)
    this.setMotherName(motherNames[i])
    window.clientTrigger('character.update', 'mother', motherId)
  }

  fatherChangeHandler = (fatherId, i) => {
    this.setActiveFather(i)
    this.setFatherName(fatherNames[i])
    window.clientTrigger('character.update', 'father', fatherId)
  }

  sliderChangeHandler = (range, type) => {
    range = (range ^ 0) === range ? range : Number(range.toFixed(2))
    if (type === 1) {
      this.setSliderValue1(range)
      window.clientTrigger('character.update', 'parentsSimilarity', range)
    } else {
      this.setSliderValue2(range)
      window.clientTrigger('character.update', 'skinColor', range)
    }
  }

  // ================================   STEP3   ================================
  setMenuActive = value => (this.state.menuActive = value)
}

export default new CreatePersStore()