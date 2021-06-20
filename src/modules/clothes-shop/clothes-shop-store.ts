import { makeAutoObservable } from 'mobx';
import { IClothesItem, IData, IState } from './model';

type TMethod = 'card' | 'cash';
type TCardId = string | null;

class ClothesShopStore {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  state: IState = {
    active: false,
    activeSection: null,
    activeItem: null,
    activeColor: null,
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
      this.setActiveColor(0);
    }
  };

  setActiveColor = (colorId: number | null) => {
    this.state.activeColor = colorId;
    if (colorId !== null)
      // @ts-ignore
      window.frontTrigger('clothes-shop.set.color', colorId);
  };

  get buyReady(): boolean {
    const { activeItem, activeSection, activeColor } = this.state;
    return (
      activeItem !== null && activeSection !== null && activeColor !== null
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
      currentItem,
      state: { activeColor },
    } = this;
    const curMoney = this.getCurrentMoney(method, cardId);
    const moneyCheck = !!this.currentItem && this.currentItem.price <= curMoney;
    if (this.buyReady && moneyCheck && activeColor !== null)
      // @ts-ignore
      window.frontTrigger(
        'clothes-shop.buy',
        method,
        currentItem?.name,
        currentItem?.colors[activeColor]
      );
  };
}

const store = new ClothesShopStore();
export { store };
