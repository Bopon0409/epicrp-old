import { makeAutoObservable } from 'mobx'

class LoadingStore {
  constructor () {
    makeAutoObservable(this, {}, { deep: true })
  }

  state = {
    hint: '',
    opacity: false,
    active: false
  }

  setOpacity = opacity => this.state.opacity = opacity

  openPage = () => {
    this.state.active = true
    setTimeout(() => this.setOpacity(true), 100)
  }

  closePage = () => {
    this.state.hint = ''
    this.state.opacity = false
    setTimeout(this.close, 500)
  }

  close = () => this.state.active = false

  setLoader = (data) => {
    this.state.hint = data.hint !== undefined ? data.hint : ''
    data.active ? this.openPage() : this.closePage()
  }
}

const store = new LoadingStore()
export { store }