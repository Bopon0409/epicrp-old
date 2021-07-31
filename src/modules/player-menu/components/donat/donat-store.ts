import { makeAutoObservable } from 'mobx';
import {
  IState,
  IDonatProduct,
  IOperation,
  IDonatItem
} from './models';

class DonatStore {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  page: number = 0; // страница 0 - глвная, 1 - кейс, 2 - приз, 4 - склад
  coinCourse: number = 10; // курс донат валюты
  warehouseActiveItem: number = -1; // активный элемент на складе
  activeStoreProduct: number = -1; // активный элемент на главной странице (услуги)
  winningIndex: number = -1; // winning номер предмета
  state: IState = {
    playerName: "Serzh Selistrovskiy", // ИФ игрока
    coins: 0, // кол-во донат валюты
    donatProducts: [], // список донат услуг (главная страница)
    operationsHistry: [], // истории донат операций (главная страница)
    prizeWarehouse: [] // список призов (склад призов)
  };
  caseContent: IDonatItem[] = []; // содержимое кейса, который крутим
  transactionResult: boolean = false; // прошла ли транзакция

  prize: IDonatItem = {
    name: '', // название приза
    img: "", // картинка приза
    tier: 0, // редкость предмета
    comment: "I dont know", // описание предмета
    sellPrice: 0 // цена продажи предмета
  }

  // задаём начальные данные страницы доната (ФИО, кол-во коинов, донат услуги, 
  // историю донат операций, содержимое склада)
  setDonat = (state: IState) => {
    this.state = state;
  }
  // задать курс обмена
  setCoinCourse = (num: number) => {
    this.coinCourse = num;
  }
  // задать кол-во коинов у игрока
  setCoins = (amount: number) => {
    this.state.coins = amount;
  }
  // задать новые данные для массива продуктов (главная страница доната)
  setDonatProducts = (data: IDonatProduct[]) => {
    this.state.donatProducts = data;
  }
  // задать новые данные для массива операций (главная страница доната)
  setOperationsHistory = (operationsHistry: IOperation[]) => {
    this.state.operationsHistry = operationsHistry;
  }
  // добавить новые данные в уже существующий массив (главная страница доната)
  addOperationHistory = (operationHistory: IOperation) => {
    this.state.operationsHistry.push(operationHistory);
  }
  // задать новые данные для массива призов (склад)
  setPrizeWarehouse = (prizeWarehouse: IDonatItem[]) => {
    this.state.prizeWarehouse = prizeWarehouse;
  }

  // результат проверки транзакции
  setTransactionResult = (status: boolean) => {
    this.transactionResult = status;
    console.log(this.transactionResult)
  }

  // задаём содержимое кейса при открытии
  setCaseContent = (caseContent: IDonatItem[]) => {
    this.caseContent = caseContent;
  }

  callCaseContent = (id: number) => {
    window.frontTrigger('player-menu.donat.get-case-content');
  }

  // при нажатии на item на складе делать его активным
  setWarehouseActiveItem = (id: number) => {
    this.warehouseActiveItem = id;
  }
  // при нажатии на кнопку приобрести в донат услугах
  setActiveStoreProduct = (id: number) => {
    this.activeStoreProduct = id;
  }
  // задаём страницу (0 - главная, 1 - кейс, 2 - приз, 4 - склад)
  setPage = (page: number) => {
    this.page = page;
  }

  // запрос на получение winning index 
  setWinningIndex = () => {
    window.frontTrigger('player-menu.donat-winner_index');
  }

  // получаем winning index с сервера
  setWinnerIndex = (winningIndex: number) => {
    this.winningIndex = winningIndex;
  }

  // main-page
  // проверка на деньги
  checkPlayerDonatMoney = (itemId: number) => {
    // @ts-ignore
    window.frontTrigger('player-menu.donat.tryBuy', itemId);

  }

  // конвертировать донат валюту в игровую
  convertDonatToMoney = (amount: number) => {
    // @ts-ignore
    window.frontTrigger('player-menu.convert-money', amount);
  }

//warehouse-page
  // действия с предметом, что был выбит. take - забрать, sell - продать
  prizeMove = (type: string) => {
    this.deletePrizeFromList(this.warehouseActiveItem);
    if(type === 'take'){
    // @ts-ignore
    window.frontTrigger('player-menu.donat.prize-move', type, this.warehouseActiveItem);
    }
    else if(type === 'sell'){
      // @ts-ignore
      window.frontTrigger('player-menu.donat.prize-move', type, this.warehouseActiveItem);
    }
  }

  // удалить предмет из листа, когда над ним было произведено действие
  // удаление происходит и со склада
  deletePrizeFromList = (id: number) => {
    if(this.state.prizeWarehouse.length > id){
      this.state.prizeWarehouse = this.state.prizeWarehouse.filter(
        (prize, id) => this.warehouseActiveItem !== id)
    }
  }

  // добавить предмет в список
  addPrizeInWarehouse = (item: IDonatItem) => {
    this.state.prizeWarehouse.push(item)
  }

// Lucky Case
  // получаем информацию о предмете, что был выбит
  setPrize = (data: IDonatItem) => {
    this.prize = data;
    this.addPrizeInWarehouse(this.prize);
    this.warehouseActiveItem = this.state.prizeWarehouse.length - 1;
  }
}

const donatStore = new DonatStore();
export { donatStore };
