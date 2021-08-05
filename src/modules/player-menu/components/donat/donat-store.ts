import { makeAutoObservable } from 'mobx';
import {
  IState,
  IDonatProduct,
  IOperation,
  IDonatItem,
  IConfirmWindow,
  TMoves
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
  confirmWindow:IConfirmWindow = {
    show: false,
    text: [
      'Вы действительно хотите приобрести',
      'Автомобиль BMW m5 E60',
      'Стоимость покупки составит',
      '$450.000'
    ],
    buttons: [
      ['Отмена', 'cancel'], []
      // ['Приобрести', 'buy']
    ]
  }; // окно подтверждения

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
    window.frontTrigger('player-menu.donat.winner_index');
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
    window.frontTrigger('player-menu.donat.convert-money', amount);
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
  
  
  setConfirmWindowData = (str1: string, str3: string, move: TMoves) => {
    this.confirmWindow.text[1] = str1;
    this.confirmWindow.text[3] = "$"+str3;
    if(move === 'sell'){
      this.confirmWindow.text[0] = "Вы действительно хотите продать";
      this.confirmWindow.text[2] = "После продажи вы получите";
      this.confirmWindow.buttons[1][0] = "Продать";
      this.confirmWindow.buttons[1][1] = "sell";
    } else if(move === 'buy'){
      this.confirmWindow.text[0] = "Вы действительно хотите купить";
      this.confirmWindow.text[2] = "Стоимость покупки составит";
      this.confirmWindow.buttons[1][0] = "Купить";
      this.confirmWindow.buttons[1][1] = "buy";
    } else if(move === 'convert'){
      this.confirmWindow.text[0] = "Вы действительно хотите конвертировать";
      this.confirmWindow.text[2] = "После конвертации вы получите";
      this.confirmWindow.buttons[1][0] = "Конвертировать";
      this.confirmWindow.buttons[1][1] = "convert";
    }
    this.confirmWindow.show = true;
  }

  makeConfirmMove = () => {
    const MOVE = this.confirmWindow.buttons[1][1];
    if(MOVE === 'sell'){
      if(this.page === 2) this.setPage(0);
      this.prizeMove('sell');
    }
    if(MOVE === 'buy'){
      this.checkPlayerDonatMoney(this.activeStoreProduct)
    }
    this.hideConfirmWindow();
  }

  hideConfirmWindow = () => this.confirmWindow.show = false;
}

const donatStore = new DonatStore();
export { donatStore };
