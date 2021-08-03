import { makeAutoObservable } from 'mobx';
import { IState, IData } from './models'

class EMSMedicalSertificate {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    state: IState = {
        active: false,
        data: {
            doctorResult: '',
            type: 0,
            name: '',
            doctor: '',
            date: ''
        }
    }
    setActive = (state: boolean) => this.state.active = state;
    setData = (data: IData) => this.state.data = data;

    //============================   Front Trigger   =============================
}

const store = new EMSMedicalSertificate();
export { store };