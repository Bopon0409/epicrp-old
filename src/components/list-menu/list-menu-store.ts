import { makeAutoObservable } from 'mobx'
import { IListItem, IState }  from './models'

class ListMenuStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    active: false,
    title: '',
    data: []
  }

  setTitle = (obj: { title: string }) => this.state.title = obj.title
  setData = (data: IListItem[]) => this.state.data = data
  setActive = (active: boolean) => this.state.active = active

  clickHandler = (value: string) => {
    // @ts-ignore
    window.frontTrigger('list-menu.click', value)
  }
}

const store = new ListMenuStore()

export { store }