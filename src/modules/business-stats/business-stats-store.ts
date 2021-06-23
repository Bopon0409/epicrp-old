import { makeAutoObservable }  from 'mobx';
import { IState, IStats, IWarehouse }                             from './model'

class BusinessStatsStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    state: IState = {
        active: false,
        activeBlock: 0,
        activeTypeGraphics: 0,
        stats: null,
        warehouse: null
    }
//============================   Client Trigger   ============================

    setActive = (active: boolean) => this.state.active = active
    setStats = (stats: IStats) => this.state.stats = stats;
    setWarehouse = (warehouse: IWarehouse) => this.state.warehouse = warehouse;

    setActiveBlock = (num: number) => this.state.activeBlock = num;
    setActiveTypeGraphics = (num: number) => {
        this.state.activeTypeGraphics = num;
    }

}

const store = new BusinessStatsStore()
export { store }