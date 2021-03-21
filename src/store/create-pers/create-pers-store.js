import { makeAutoObservable } from 'mobx'
import { motherNames, fatherNames } from './data'

class CreatePersStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  // =================================   STATE   ================================

  state = {
    active: false,
    step: 1,
    step1: {
      name: '',
      surname: '',
      nameErr: '',
      surnameErr: '',
      sex: 'male',
      hover: false
    },
    step2: {
      activeMother: 0,
      activeFather: 0,
      sliderValue: 0.5,
      motherName: 'Hannah',
      fatherName: 'Benjamin'
    },
    menuActive: 1,
    serverData: {}
  }

  // =================================   MAIN   ================================
  setStep = step => (this.state.step = step)
  setCreatePers = (active, data) => {
    this.state.serverData = data ? data : {}
    this.state.active = active
  }
  finishCreate = () => {
    if (window.mp) window.mp.trigger('createCharFinish')
  }
  // ================================   STEP2   ================================
  setName = value => (this.state.step1.name = value)
  setSurname = value => (this.state.step1.surname = value)
  setNameErr = value => (this.state.step1.nameErr = value)
  setSurnameErr = value => (this.state.step1.surnameErr = value)
  setSex = value => (this.state.step1.sex = value)
  setHover = value => (this.state.step1.hover = value)

  inputChangeHandler = (event, type) => {
    type === 'name' ? this.setNameErr('') : this.setSurnameErr('')
    let str = event.target.value.slice(0, 14).toLowerCase()
    str = str.charAt(0).toUpperCase() + str.slice(1)
    type === 'name' ? this.setName(str) : this.setSurname(str)
  }

  validation = () => {
    this.setSurnameErr('')
    this.setNameErr('')

    const { name, surname, sex } = this.state.step1
    if (name.length < 3 || name.length > 14)
      return this.setNameErr('Недопустимая Длина')
    if (surname.length < 3 || surname.length > 14)
      return this.setSurnameErr('Недопустимая Длина')

    if (window.mp) {
      window.mp.trigger('createCharChangeValue', 'name', name)
      window.mp.trigger('createCharChangeValue', 'surname', surname)
      window.mp.trigger('createCharChangeValue', 'sex', sex)
    }

    this.setStep(2)
  }

  // ================================   STEP2   ================================
  setActiveMother = value => (this.state.step2.activeMother = value)
  setActiveFather = value => (this.state.step2.activeFather = value)
  setSliderValue = value => (this.state.step2.sliderValue = value)
  setMotherName = value => (this.state.step2.motherName = value)
  setFatherName = value => (this.state.step2.fatherName = value)

  motherChangeHandler = (motherId, i) => {
    this.setActiveMother(i)
    this.setMotherName(motherNames[i])
    if (window.mp)
      window.mp.trigger('createCharChangeValue', 'mother', motherId)
  }

  fatherChangeHandler = (fatherId, i) => {
    this.setActiveFather(i)
    this.setFatherName(fatherNames[i])
    if (window.mp)
      window.mp.trigger('createCharChangeValue', 'father', fatherId)
  }

  sliderChangeHandler = range => {
    range = (range ^ 0) === range ? range : Number(range.toFixed(2))
    this.setSliderValue(range)
    if (window.mp)
      window.mp.trigger('createCharChangeValue', 'parents_similarity', range)
  }

  // ================================   STEP3   ================================
  setMenuActive = value => (this.state.menuActive = value)
}

export default new CreatePersStore()
