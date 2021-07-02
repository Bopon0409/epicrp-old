import { makeAutoObservable }  from 'mobx';
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
        },
        progress: 20
    }


    setActive = (state: boolean) => {
        this.state.active = state;
    }
    setData = (data: IProgress) => {
        this.state.progressInfo = data;
    }

    changeTime = (newTime: number) => {
        this.state.progressInfo.time = newTime;
    }
    updateProgress = () => {
        const Interval = setInterval(() => {
            this.state.progress += 1;
            if(this.state.progress >= 100) clearInterval(Interval);
        }, 100)
    }
}

const store = new ProgressStore()

export { store }