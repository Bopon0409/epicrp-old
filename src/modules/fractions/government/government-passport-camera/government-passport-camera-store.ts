import { makeAutoObservable } from 'mobx';
import { IState, KeyCodes } from './models'

class GovPassportCameraStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    state: IState = {
        show: false,
        activeKey: null
    }
    setShow = (state: boolean) => this.state.show = state;

    makePreviousEmotion = () => {
        this.changeActiveKey(0);
        window.frontTrigger(`government-passport-camera-emotion.past`);
        this.setActiveKeyNull();
    }

    makeNextEmotion = () => {
        this.changeActiveKey(2);
        window.frontTrigger(`government-passport-camera-emotion.next`);
        this.setActiveKeyNull();
    }

    makeScreenShot = () => {
        this.changeActiveKey(1);
        window.frontTrigger(`government-passport-camera-emotion.screen`);
        this.setActiveKeyNull();
    }

    setActiveKeyNull = () => {
        const Timer = setTimeout(() => {
            this.changeActiveKey(null);
            clearTimeout(Timer);
        }, 100);
    }

    changeActiveKey = (key: KeyCodes | null) => this.state.activeKey = key;
    //============================   Front Trigger   =============================
}

const store = new GovPassportCameraStore();
export { store };