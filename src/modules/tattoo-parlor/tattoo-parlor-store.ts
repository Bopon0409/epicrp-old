import { makeAutoObservable } from 'mobx';
import { IClothesItem, IData, IState } from './model';

type TMethod = 'card' | 'cash';
type TCardId = string | null;

class TattooParlorStore {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  state: IState = {
    active: false,
    activeSection: null,
    activeItem: null,
    businessId: 0,
    money: {
      cash: 0,
      cards: [],
    },
    shopList: null,
  };

  setActive = (active: boolean) => (this.state.active = active);

  setData = (data: IData) => {
    if (data.money !== undefined) this.state.money = data.money;
    if (data.shopList !== undefined) this.state.shopList = data.shopList;
    if (data.businessId !== undefined) this.state.businessId = data.businessId;
  };

  setActiveSection = (sectionNum: number) => {
    this.setActiveItem(null);
    this.state.activeSection = sectionNum;
    if (sectionNum !== null)
      // @ts-ignore
      window.frontTrigger('clothes-shop.set.section', sectionNum);
  };

  setActiveItem = (itemNum: number | null) => {
    this.state.activeItem = itemNum;
    if (itemNum !== null) {
      // @ts-ignore
      window.frontTrigger('clothes-shop.set.item', itemNum);
    }
  };

  get buyReady(): boolean {
    const { activeItem, activeSection } = this.state;
    return (
      activeItem !== null && activeSection !== null
    );
  }

  get currentItem(): IClothesItem | null {
    const { shopList, activeSection, activeItem } = this.state;
    return shopList !== null && activeSection !== null && activeItem !== null
      ? shopList[activeSection][activeItem]
      : null;
  }

  getCurrentMoney = (method: TMethod, cardId: TCardId): number => {
    const { cash, cards } = this.state.money;
    if (method === 'card') {
      const card = cards.find((card) => card.accountId === cardId);
      return card?.balance || 0;
    } else return cash;
  };

  payAction = (method: TMethod, cardId: TCardId) => {
    const {
      currentItem
    } = this;
    const curMoney = this.getCurrentMoney(method, cardId);
    const moneyCheck = !!this.currentItem && this.currentItem.price <= curMoney;
    if (this.buyReady && moneyCheck)
      // @ts-ignore
      window.frontTrigger(
        'clothes-shop.buy',
        method,
        store.state?.activeSection,
        currentItem?.name
      );
  };
}

const store = new TattooParlorStore();
export { store };
