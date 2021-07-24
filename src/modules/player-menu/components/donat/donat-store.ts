import { makeAutoObservable } from 'mobx';
import { IState } from './models';

class DonatStore {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  page: number = 0;
  coinCourse: number = 10;
  warehouseActiveItem: number = -1;
  activeStoreProduct: number = -1;
  state: IState = {
    playerName: "Serzh Selistrovskiy",
    coins: 0,
    donatProducts: [],
    operationsHistry: [],
    luckCases: 0,
    prizeWarehouse: []
  };


  setDonat = (state: IState) => {
    this.state = state;
  }

  setWarehouseActiveItem = (id: number) => {
    this.warehouseActiveItem = id;
  }

  setActiveStoreProduct = (id: number) => {
    this.activeStoreProduct = id;
  }

  setPage = (page: number) => {
    this.page = page;
  }

  // main-page
  checkPlayerDonatMoney = (itemId: number) => {
    // @ts-ignore
    window.frontTrigger('player-menu.donat.tryBuy', itemId);
    // если это кейс, то с бэка прилетает переключение страницы на 1, перед этим
    // предварительно назначи activeStoreProduct номер предмета, что передавался
  }

  convertDonatToMoney = (amount: number) => {
    // @ts-ignore
    window.frontTrigger('player-menu.convert-money', amount);
  }

  //warehouse-page
  PrizeMove = (type: string) => {
    this.DeletePrizeFromList(this.warehouseActiveItem);
    if(type === 'take'){
    // @ts-ignore
    window.frontTrigger('player-menu.donat.prize-move', type, this.warehouseActiveItem);
    }
    else if(type === 'sell'){
      // @ts-ignore
      window.frontTrigger('player-menu.donat.prize-move', type, this.warehouseActiveItem);
    }
  }

  DeletePrizeFromList = (id: number) => {
    if(this.state.prizeWarehouse.length > id){
      this.state.prizeWarehouse = this.state.prizeWarehouse.filter(
        (prize, id) => this.warehouseActiveItem !== id)
    }
  }
}

const donatStore = new DonatStore();
export { donatStore };
