import { makeAutoObservable }       from 'mobx'
import { IData, IState } from './models'

class ListMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    title: '',
    list: []
  }

  openMenu = (data: IData) => {
    this.state = { active: true, list: data.list, title: data.title }
  }

  closeMenu = () => this.state = { active: false, title: '', list: [] }

  setActive = (active: boolean) => this.state.active = active

  clickHandler = (value: string) => {
    // @ts-ignore
    window.frontTrigger('list-menu.click', value)
  }
}

const store = new ListMenuStore()

export { store }