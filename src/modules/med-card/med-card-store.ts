import { makeAutoObservable }         from 'mobx'
import { IState, IMedCard, IHistory } from './models'

class MedCardStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    medCard: {
      firstName: '',
      secondName: '',
      age: 0,
      nationality: '',
      photo: '',
      medicalHistory: []
    },
    medicalHistoryLeft: [],
    medicalHistoryRight: [],
    page: 0
  }

  setActive = (state: boolean) => this.state.active = state
  setData = (data: IMedCard) => {
    this.state.medCard = data
    const EmptyArrEl: IHistory = {
      patientComment: '-',
      doctorComment: '-',
      doctor: 'Noname',
      date: '22.22.2022'
    }
    this.state.medCard.medicalHistory.unshift(EmptyArrEl)
    this.state.medCard.medicalHistory.map((history, i) => {
      if (i % 2 === 0) return this.state.medicalHistoryRight.push(history)
      else return this.state.medicalHistoryLeft.push(history)
    })
  }
  setPage = (type: string) => {
    switch (type) {
      case 'start': {
        this.state.page = 0
        break
      }
      case 'back': {
        this.state.page = this.state.page - 1
        break
      }
      case 'next': {
        this.state.page = this.state.page + 1
        break
      }
      case 'end': {
        this.state.page = this.state.medicalHistoryRight.length - 1
        break
      }
    }
  }
}

const store = new MedCardStore()

export { store }