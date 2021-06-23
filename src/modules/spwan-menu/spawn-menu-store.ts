import { makeAutoObservable }  from 'mobx';
import { IState  } from './model';

class SpawnMenuStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    state: IState = {
        active: false,
        activeBlock: null,
        points: [],
        isCrime: false
    }

  //============================   Client Trigger   ============================

    setActive = (active: boolean) => this.state.active = active;
    setActiveBlock = (num: number | null) => this.state.activeBlock = num;

    setPoints = (points: []) => {this.state.points = points};
    setIsCrime = (state:boolean) => {this.state.isCrime = state}

  //============================   Front Trigger   =============================

    spawnPoint = (pointId: number) => {
        // @ts-ignore
        window.frontTrigger(`spawn-menu.point`, { pointId });
    }
}

const store = new SpawnMenuStore()
export { store }