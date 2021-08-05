import { makeAutoObservable } from 'mobx'
import { IState, IData, PageName, HouseType } from './models'

class StateAgency {
  constructor() {
    makeAutoObservable(this, {}, { deep: true })
  }

  state: IState = {
    show: false,
    page: 'main',
    houseType: null,
    activeHouse: 0,
    houses: [],
    marginTop: 0,
    data: {
      name: 'Sergey Selistrovskiy',
      houses: [],
      houseClasses: []
    }
  }


  // показать/скрыть
  setShow = (state: boolean) => this.state.show = state;
  // изменить страницу (происходит по нажатию на выбранный класс домов)
  setPage = (name: PageName) => this.state.page = name;
  // фильтрация домов по категории
  setHouseType = (type: HouseType) => {
    this.state.houseType = type;
    this.state.houses = this.state.data.houses.filter(
      (house) => house.houseType === this.state.houseType
    );
  }
  // загрузить данные в интерфейс 'Агенство недвижимости'
  setData = (data: IData) => this.state.data = data;
  // сделать новый дом активным
  setNewActiveHouse = (type: 'next' | 'prevent') => {
    if (type === 'next' && this.state.activeHouse < this.state.houses.length - 1) {
      if (this.state.activeHouse > 0 && this.state.activeHouse < this.state.houses.length - 2) this.state.marginTop -= 147;
      this.state.activeHouse++;
    }
    else if (type === 'prevent' && this.state.activeHouse > 0) {
      this.state.activeHouse--;
      if (this.state.activeHouse > 0 && this.state.activeHouse < this.state.houses.length - 2)
        this.state.marginTop += 147;
    }
  }
  // изменить прокрутку блока
  setMarginTop = (top: number) => {
    this.state.marginTop = top;
  }
  // изменить активный дом
  setActiveHouse = (id: number) => {
    this.state.activeHouse = id;
  }
//============================   Front Trigger   =============================
  triggerHouseMoves = (houseId: number, move: "watch" | "buy") => {
    window.frontTrigger(`state-agency.house-move`, { houseId, move});
  }
}

const StateAgencyStore = new StateAgency()
export { StateAgencyStore }