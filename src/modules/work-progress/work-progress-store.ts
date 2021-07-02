import { makeAutoObservable } from 'mobx';
import { IState, IProgress } from './models'

class ProgressStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    state: IState = {
        active: false,
        progressInfo: {
            name: "",
            about: "",
            min: 0,
            max: 0,
            time: 5
        }
    }

    setActive = (state: boolean) => this.state.active = state;
    setData = (data: IProgress) => this.state.progressInfo = data;
}

const store = new ProgressStore()

export { store }