import { makeAutoObservable } from 'mobx'
import { IState, IData }      from './models'

class TattooParlorStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    show: false,
    activeTextId: 0,
    data: {
      name: '',
      job: '',
      texts: []
    }
  }

  setShow = (status: boolean) => this.state.show = status

  setData = (data: IData) => this.state.data = data

  setActiveTextId = (move: 'next' | 'past' | number) => {
    if (move === 'next') {
      if (this.state.activeTextId < this.state.data.texts.length - 1) {
        this.state.activeTextId++
      } else {
        this.state.show = false
        this.state.activeTextId = 0
      }
    } else if (move === 'past') {
      if (this.state.activeTextId > 0) {
        this.state.activeTextId--
      }
    } else {
      window.frontTrigger(`dialogs.answer`, move)
    }
  }
}

const store = new TattooParlorStore()
export { store }
