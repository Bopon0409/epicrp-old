import { makeAutoObservable }       from 'mobx'
import { IData, IListItem, IState } from './models'

class ListMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    title: '',
    list: []
  }

  convert = (list: string[]): IListItem[] => {
    return list.map((item, i) => ({ value: i, text: item }))
  }

  openMenu = (data: IData) => {
    this.state = {
      active: true, list: this.convert(data.list), title: data.title
    }
  }

  closeMenu = () => this.state = { active: false, title: '', list: [] }

  setActive = (active: boolean) => this.state.active = active

  clickHandler = (value: number | string) => {
    // @ts-ignore
    if (value === 'close') window.frontTrigger('list-menu.close')
    // @ts-ignore
    else window.frontTrigger('list-menu.click', value)
    this.closeMenu()
  }
}

const store = new ListMenuStore()

export { store }